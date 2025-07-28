# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a real-time chat application built with Vue 3, Vuetify, and Socket.io. The application features user authentication, real-time messaging, and private memo functionality.

## Development Commands

- **Install dependencies**: `npm ci` (use instead of npm install for consistent dependencies)
- **Start development server**: `npm run start` (runs Vite dev server on port 3000)
- **Access the app**: `http://localhost:3000/` or `http://[server-ip]:3000/`
  - Note: HTTPS is automatically enabled if SSL certificates exist at `/etc/ssl/private.key` and `/etc/ssl/certificate.crt`

Note: There are no build, test, or lint commands configured in this project yet.

## Architecture

### Full-Stack Integration
The project uses a unique architecture where the Socket.io backend is integrated directly into the Vite development server through a custom plugin (`plugins/socket.io.plugin.js`). This means:
- No separate backend server process
- Socket.io events are handled in `socket_event/index.js`
- The Vite config (`vite.config.js`) automatically detects SSL certificates and enables HTTPS when available

### Frontend Structure
- **Framework**: Vue 3 with Composition API
- **UI Library**: Vuetify 3
- **Routing**: Vue Router 4 with route guards
- **State Management**: Component-level state (no Vuex/Pinia)
- **Socket Client**: Singleton pattern via `src/socketManager.js`

### Key Components
- `src/components/pages/EnterPage.vue` - Login page with username validation
- `src/components/Chat.vue` - Main chat interface
- `src/router/index.js` - Route configuration with authentication guard

### Socket Events
The application uses three main socket events:
- `enterEvent` - Broadcasts when a user joins (excluding sender)
- `exitEvent` - Broadcasts when a user leaves (excluding sender)  
- `publishEvent` - Broadcasts messages to all connected clients

### Japanese Language
This application is designed for Japanese users. UI text, error messages, and user-facing strings should be in Japanese.