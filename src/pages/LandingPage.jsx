import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  Chip,
  Avatar,
  Fade,
  Slide,
  useTheme,
  alpha,
  Divider,
  Stack
} from '@mui/material';
import {
  VerifiedUser,
  School,
  Stars,
  ArrowForward,
  Security,
  Speed,
  CheckCircle,
  MenuBook,
  EmojiEvents,
  Dashboard
} from '@mui/icons-material';

export default function LandingPage() {
  const theme = useTheme();
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Security sx={{ fontSize: 40, color: '#6366f1' }} />,
      title: 'Secure Verification',
      description: 'Advanced security protocols ensure data integrity and privacy protection'
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: '#06b6d4' }} />,
      title: 'Fast Processing',
      description: 'Lightning-fast verification with real-time status updates'
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Accurate Results',
      description: 'AI-powered verification with 99.9% accuracy rate'
    }
  ];

  const verificationModes = [
    {
      icon: <MenuBook sx={{ fontSize: 48, color: '#6366f1' }} />,
      title: 'Student Verification',
      description: 'Verify academic credentials, enrollment status, and student identity with comprehensive validation.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#6366f1'
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 48, color: '#f59e0b' }} />,
      title: 'Talent Show Verification',
      description: 'Authenticate performer credentials, validate competition entries, and verify artistic achievements.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f59e0b'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: `linear-gradient(135deg, ${alpha('#6366f1', 0.1)} 0%, ${alpha('#06b6d4', 0.1)} 100%)`,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, ${alpha('#6366f1', 0.1)} 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, ${alpha('#06b6d4', 0.1)} 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, ${alpha('#10b981', 0.05)} 0%, transparent 50%)
        `,
        zIndex: 0
      }} />

      {/* Navigation */}
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          backgroundColor: alpha('#ffffff', 0.95),
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${alpha('#e5e7eb', 0.3)}`
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <VerifiedUser sx={{ mr: 2, color: '#6366f1', fontSize: 32 }} />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #6366f1, #06b6d4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              VerifyHub
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="text" 
              sx={{ 
                color: '#64748b',
                fontWeight: 500,
                '&:hover': { color: '#6366f1' }
              }}
            >
              Features
            </Button>
            <Button 
              variant="text"
              sx={{ 
                color: '#64748b',
                fontWeight: 500,
                '&:hover': { color: '#6366f1' }
              }}
            >
              About
            </Button>
            <Button 
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #5b21b6, #6366f1)',
                  boxShadow: '0 6px 25px rgba(99, 102, 241, 0.4)'
                }
              }}
            >
              <Dashboard sx={{ mr: 1 }} />
              Dashboard
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <Fade in={isVisible} timeout={1000}>
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: { xs: 8, md: 12 },
              px: { xs: 2, md: 0 }
            }}
          >
            <Slide in={isVisible} direction="down" timeout={800}>
              <Box>
                <Chip 
                  label="✨ New AI-Powered Verification" 
                  sx={{ 
                    mb: 3,
                    backgroundColor: alpha('#6366f1', 0.1),
                    color: '#6366f1',
                    fontWeight: 600,
                    border: `1px solid ${alpha('#6366f1', 0.2)}`
                  }}
                />
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #1e293b, #475569)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2
                  }}
                >
                  Next-Gen Verification
                  <br />
                  <span style={{ 
                    background: 'linear-gradient(45deg, #6366f1, #06b6d4)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Made Simple
                  </span>
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: '#64748b',
                    fontWeight: 400,
                    mb: 6,
                    maxWidth: 600,
                    mx: 'auto',
                    lineHeight: 1.6
                  }}
                >
                  Streamline your verification process with our cutting-edge platform. 
                  Secure, fast, and incredibly accurate verification for students and talent shows.
                </Typography>
              </Box>
            </Slide>
          </Box>
        </Fade>

        {/* Verification Modes */}
        <Fade in={isVisible} timeout={1200}>
          <Box sx={{ mb: 10 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                textAlign: 'center', 
                mb: 6,
                fontWeight: 700,
                color: '#1e293b'
              }}
            >
              Choose Your Verification Mode
            </Typography>
            <Grid container spacing={4}>
              {verificationModes.map((mode, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Slide in={isVisible} direction="up" timeout={1000 + index * 200}>
                    <Card
                      onMouseEnter={() => setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                      sx={{
                        height: '100%',
                        background: activeCard === index ? mode.gradient : '#ffffff',
                        color: activeCard === index ? '#ffffff' : '#1e293b',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: activeCard === index ? 'translateY(-8px)' : 'translateY(0)',
                        boxShadow: activeCard === index 
                          ? '0 20px 40px rgba(0,0,0,0.15)' 
                          : '0 4px 20px rgba(0,0,0,0.08)',
                        cursor: 'pointer',
                        border: `1px solid ${alpha('#e5e7eb', 0.5)}`,
                        borderRadius: 3,
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <Avatar
                            sx={{
                              width: 64,
                              height: 64,
                              backgroundColor: activeCard === index ? alpha('#ffffff', 0.2) : alpha(mode.color, 0.1),
                              mr: 2
                            }}
                          >
                            {mode.icon}
                          </Avatar>
                          <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                              {mode.title}
                            </Typography>
                            <Chip 
                              label="Active" 
                              size="small"
                              sx={{
                                backgroundColor: activeCard === index ? alpha('#ffffff', 0.2) : alpha(mode.color, 0.1),
                                color: activeCard === index ? '#ffffff' : mode.color,
                                fontWeight: 600
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            mb: 3,
                            flexGrow: 1,
                            lineHeight: 1.6,
                            opacity: activeCard === index ? 0.9 : 0.7
                          }}
                        >
                          {mode.description}
                        </Typography>
                        <Button
                          variant={activeCard === index ? "outlined" : "contained"}
                          endIcon={<ArrowForward />}
                          sx={{
                            alignSelf: 'flex-start',
                            borderColor: activeCard === index ? alpha('#ffffff', 0.3) : 'transparent',
                            backgroundColor: activeCard === index ? 'transparent' : alpha(mode.color, 0.1),
                            color: activeCard === index ? '#ffffff' : mode.color,
                            fontWeight: 600,
                            '&:hover': {
                              backgroundColor: activeCard === index ? alpha('#ffffff', 0.1) : alpha(mode.color, 0.2),
                              borderColor: activeCard === index ? alpha('#ffffff', 0.5) : 'transparent'
                            }
                          }}
                        >
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        {/* Features Section */}
        <Fade in={isVisible} timeout={1400}>
          <Box sx={{ mb: 10 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                textAlign: 'center', 
                mb: 6,
                fontWeight: 700,
                color: '#1e293b'
              }}
            >
              Why Choose VerifyHub?
            </Typography>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Slide in={isVisible} direction="up" timeout={1200 + index * 100}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        height: '100%',
                        backgroundColor: '#ffffff',
                        border: `1px solid ${alpha('#e5e7eb', 0.3)}`,
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Box sx={{ mb: 3 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                        {feature.description}
                      </Typography>
                    </Paper>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        {/* Stats Section */}
        <Fade in={isVisible} timeout={1600}>
          <Paper 
            elevation={0}
            sx={{
              p: 6,
              mb: 10,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#ffffff',
              borderRadius: 4,
              textAlign: 'center'
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                  50K+
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Verified Students
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                  99.9%
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Accuracy Rate
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                  24/7
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Support Available
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Fade>

        {/* Call to Action */}
        <Fade in={isVisible} timeout={1800}>
          <Box sx={{ textAlign: 'center', pb: 10 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 3,
                fontWeight: 700,
                color: '#1e293b'
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                color: '#64748b',
                maxWidth: 500,
                mx: 'auto'
              }}
            >
              Join thousands of satisfied users who trust VerifyHub for their verification needs.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #5b21b6, #6366f1)',
                    boxShadow: '0 12px 30px rgba(99, 102, 241, 0.4)'
                  }
                }}
              >
                Start Verification
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  borderColor: '#6366f1',
                  color: '#6366f1',
                  '&:hover': {
                    borderColor: '#5b21b6',
                    backgroundColor: alpha('#6366f1', 0.05)
                  }
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}