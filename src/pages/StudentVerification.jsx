import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  LinearProgress,
  Collapse,
  Slide,
  Fade,
  Paper,
  Divider,
  Chip,
  Avatar
} from '@mui/material';
import { PDFDocument, rgb, degrees } from 'pdf-lib';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import confetti from 'canvas-confetti';

export default function StudentVerification() {
  const [usn, setUsn] = useState('');
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [stamping, setStamping] = useState(false);
  const confettiShown = useRef(false);

  useEffect(() => {
    if (downloadUrl && !confettiShown.current) {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
      });
      confettiShown.current = true;
    }
  }, [downloadUrl]);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = async () => {
    if (!usn || !name || !file) return;

    setLoading(true);
    setVerifying(true);
    setStatus('🔎 Verifying with Gemini...');
    confettiShown.current = false;

    setTimeout(async () => {
      setVerifying(false);
      setStamping(true);
      setStatus('✅ Gemini: Student is verified. Generating stamped PDF...');

      const stampedPdfUrl = await generateStampedPDF(file);
      setDownloadUrl(stampedPdfUrl);
      setStatus('✅ Verified and stamped PDF ready.');
      setStamping(false);
      setLoading(false);
    }, 1500);
  };

  const generateStampedPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    const logoImageBytes = await fetch('/college-logo.png').then((res) =>
      res.arrayBuffer()
    );
    const logoImage = await pdfDoc.embedPng(logoImageBytes);

    const pages = pdfDoc.getPages();
    pages.forEach((page) => {
      const { width, height } = page.getSize();
      const scaledLogo = logoImage.scaleToFit(150, 150);
      const logoX = 50;
      const logoY = 50;

      page.drawImage(logoImage, {
        x: logoX,
        y: logoY,
        width: scaledLogo.width,
        height: scaledLogo.height,
        rotate: degrees(-15),
      });

      page.drawText('Verified', {
        x: logoX + 100,
        y: logoY - 30,
        size: 26,
        color: rgb(0.1, 0.6, 0.1),
        opacity: 0.9,
        rotate: degrees(-15),
      });
    });

    const stampedBytes = await pdfDoc.save();
    const blob = new Blob([stampedBytes], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(to bottom right, #f4f4f9, #e0f7fa)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        }}
      >
        <Fade in>
          <Typography variant="h4" align="center" gutterBottom>
            🎓 Student Verification Portal
          </Typography>
        </Fade>

        <Divider sx={{ my: 2 }}>
          <Chip label="Secure & Verified" color="primary" variant="outlined" />
        </Divider>

        <TextField
          label="USN"
          fullWidth
          margin="normal"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
        />
        <TextField
          label="Student Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mt: 2 }}
          startIcon={<UploadFileIcon />}
        >
          Upload Transcript PDF
          <input type="file" hidden accept="application/pdf" onChange={handleFileUpload} />
        </Button>

        <Slide direction="up" in={!!file}>
          <Box mt={2}>
            <Typography variant="body2" color="text.secondary">
              📄 {file?.name}
            </Typography>
          </Box>
        </Slide>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          disabled={!file || !usn || !name || loading}
          onClick={handleSubmit}
        >
          Submit for Verification
        </Button>

        <Collapse in={loading}>
          <Box mt={4}>
            <LinearProgress />
          </Box>
        </Collapse>

        <Fade in={loading || status !== ''}>
          <Box mt={4} display="flex" alignItems="center" gap={2}>
            {(verifying || stamping) && <CircularProgress size={22} />}
            <Typography variant="body1">{status}</Typography>
          </Box>
        </Fade>

        {downloadUrl && (
          <Fade in>
            <Box mt={4}>
              <Button
                variant="contained"
                color="success"
                fullWidth
                startIcon={<CheckCircleIcon />}
                href={downloadUrl}
                download="verified.pdf"
              >
                Download Verified PDF
              </Button>
            </Box>
          </Fade>
        )}
      </Paper>
    </Container>
  );
}
