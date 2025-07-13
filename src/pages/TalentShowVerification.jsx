import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Container,
  Typography,
  Button,
  Box,
  CircularProgress,
  Paper,
  Divider,
  Chip,
  Fade,
} from '@mui/material';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import { GoogleGenerativeAI } from '@google/generative-ai';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

export default function TalentShowVerification() {
  const [file, setFile] = useState(null);
  const [lyricsText, setLyricsText] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const uploaded = e.target.files[0];
    if (uploaded && uploaded.type === 'application/pdf') {
      setFile(uploaded);
    } else {
      alert('Upload a valid PDF lyrics file.');
    }
  };

  const extractTextFromPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await getDocument({ data: arrayBuffer }).promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map((item) => item.str).join(' ');
      text += `\n${pageText}`;
    }
    return text;
  };

  const handleVerify = async () => {
    if (!file) return;
    setLoading(true);
    setResponse('');

    const text = await extractTextFromPDF(file);
    setLyricsText(text);

    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

    const prompt = `Given the following song lyrics:\n\n"""${text}"""\n\nDetermine whether this song is original or heavily inspired by an existing song. If original, provide tips for performing it in an international talent show. If not original, explain how to rewrite it while keeping the essence but making it unique.`;

    try {
      const result = await model.generateContent(prompt);
      const res = await result.response;
      const output = await res.text();
      setResponse(output);
    } catch (err) {
      console.error(err);
      setResponse('❌ Error fetching response from Gemini.');
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          background: 'linear-gradient(to bottom right, #fdfbfb, #ebedee)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}
      >
        <Fade in>
          <Box display="flex" alignItems="center" gap={1} justifyContent="center">
            <MusicNoteIcon color="primary" />
            <Typography variant="h4" align="center">
              Talent Show Lyrics Verifier
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 3 }}>
          <Chip label="🎶 Powered by Gemini AI" color="primary" variant="outlined" />
        </Divider>

        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mt: 1 }}
        >
          Upload Song Lyrics PDF
          <input type="file" hidden accept="application/pdf" onChange={handleFileUpload} />
        </Button>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={!file || loading}
          onClick={handleVerify}
        >
          Analyze Lyrics
        </Button>

        {loading && (
          <Box display="flex" alignItems="center" mt={4} gap={2}>
            <CircularProgress size={24} />
            <Typography>Analyzing lyrics for originality and feedback...</Typography>
          </Box>
        )}

        {!loading && response && (
          <Fade in>
            <Box mt={5}>
              <Typography variant="h6" gutterBottom>
                🧠 Gemini's Feedback
              </Typography>
              <Box
                mt={2}
                sx={{
                  typography: 'body1',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  px: 3,
                  py: 2,
                  boxShadow: 'inset 0 0 0.5em rgba(0,0,0,0.05)',
                  whiteSpace: 'pre-wrap',
                }}
              >
                <ReactMarkdown>{response}</ReactMarkdown>
              </Box>
            </Box>
          </Fade>
        )}
      </Paper>
    </Container>
  );
}
