import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { VerifiedUser } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Student Verification', path: '/student' },
    { label: 'Talent Show', path: '/talent' }
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: alpha('#0f172a', 0.85),
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${alpha('#334155', 0.5)}`
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <VerifiedUser sx={{ color: '#6366f1' }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              fontWeight: 700,
              color: 'inherit',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            VerifyHub
          </Typography>
        </Stack>
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? '#6366f1' : '#cbd5e1',
                fontWeight: 500,
                textTransform: 'none',
                mx: 1,
                '&:hover': {
                  color: '#8b5cf6',
                  backgroundColor: alpha('#ffffff', 0.05)
                }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
