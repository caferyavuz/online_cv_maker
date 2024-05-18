import React from 'react'

// Sidebar Icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BallotIcon from '@mui/icons-material/Ballot';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
  {
    title:"Home",
    icon: <HomeIcon />,
    path: '/profile/default-user/home'
  },
  {
    title:"About",
    icon: <PersonIcon />,
    path: '/profile/default-user/about'
  },
  {
    title:"Services",
    icon: <MiscellaneousServicesIcon />,
    path: '/profile/default-user/services'
  },
  {
    title:"Skills",
    icon: <IntegrationInstructionsIcon />,
    path: '/profile/default-user/skills'
  },
  {
    title:"Education",
    icon: <SchoolIcon />,
    path: '/profile/default-user/education'
  },
  {
    title:"Experience",
    icon: <WorkIcon />,
    path: '/profile/default-user/experiance'
  },
  {
    title:"Portfolio",
    icon: <BallotIcon />,
    path: '/profile/default-user/portfolio'
  },
  {
    title:"Contact",
    icon: <ContactMailIcon />,
    path: '/profile/default-user/contact'
  },
  {
    title:"Log Out",
    icon: <LogoutIcon />,
    path: '/login'
  }
]
