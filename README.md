# Interval App

🌐[www.timerApp.io](https://interval-app-for-all-you-timing-needs.vercel.app/)

## Overview

The Interval App is a React-based application designed to help users manage their time effectively through various timers and interval settings. The app leverages modern web technologies such as TypeScript, Zustand for state management, and Framer Motion for animations.

![preview image](/public/images/Interval-app.png)

## Features

### Timers

- **Analog Timer**: A classic analog clock interface.
- **Digital Timer**: A digital display for precise time tracking.
- **Visual Timer**: A graphical representation of time.
- **Level Up Timer**: A timer with level-up animations to motivate users.

### Pages

- **Loading Page**: Initial loading screen.
- **Set Timer Page**: Interface to set and customize timers.
- **Timer Page**: Main page to display and interact with timers.
- **Alarm Page**: Page to manage and set alarms.
- **Interval Page**: Page to configure and manage interval settings.
- **404 Not Found Page**: Custom 404 page for unmatched routes.

### State Management

- **Navigation State**: Managed using Zustand in [`src/stores/nav.store.ts`](src/stores/nav.store.ts).
- **Timer State**: Managed using Zustand in [`src/stores/timer.store.ts`](src/stores/timer.store.ts).

### Custom Hooks

- **useBreak**: Custom hook for break management in [`src/hooks/useBreak.ts`](src/hooks/useBreak.ts).
- **useIntervalAndBreak**: Custom hook for managing intervals and breaks in [`src/hooks/useIntervalAndBreak.ts`](src/hooks/useIntervalAndBreak.ts).
- **useLevelUpAnimation**: Custom hook for handling level-up animations in [`src/hooks/useLevelUpAnimation.ts`](src/hooks/useLevelUpAnimation.ts).
- **useCalcDeg**: Custom hook for calculating the rotation of the minutes and seconds hands on the analog clock [`src/hooks/useCalcDeg.ts`](src/hooks/useCalcDeg.ts)

## Animations

### Animation Principles

In this project, I applied the 12 Principles of Animation to enhance the user experience and make the interactions more engaging. Here’s how each principle was utilized:

1. **Squash and Stretch**: Used in the Level Up Timer animations to give a sense of weight and flexibility when the timer reaches a new level.
2. **Anticipation**: Implemented in the button animations to prepare the user for the upcoming action, such as starting or stopping the timer.
3. **Staging**: Ensured that the most important elements, like the active timer, are prominently displayed and easy to interact with.
4. **Straight Ahead Action and Pose to Pose**: Combined both techniques in the visual timer animations to create fluid and dynamic movements.
5. **Follow Through and Overlapping Action**: Applied to the timer hands in the Analog Timer to create a more natural and realistic motion.
6. **Slow In and Slow Out**: Used in the transitions between different pages and states to make the animations feel more organic.
7. **Arc**: Incorporated in the movement of the timer hands and other animated elements to create more natural motion paths.
8. **Secondary Action**: Added subtle animations to background elements and secondary UI components to support the main action without distracting from it.
9. **Timing**: Carefully adjusted the timing of all animations to ensure they feel smooth and responsive.
10. **Exaggeration**: Used in the Level Up Timer animations to emphasize the achievement of reaching a new level.
11. **Solid Drawing**: Ensured that all animated elements maintain their volume and consistency throughout the animations.
12. **Appeal**: Focused on creating visually appealing animations that enhance the overall user experience and make the app enjoyable to use.

By incorporating these principles, I aimed to create a more engaging and intuitive user experience that leverages the power of animation to communicate effectively and delight users.

#### Animation - Highlight

- **Framer Motion**: Used for smooth animations and transitions in components like [`LevelUpTimer`](src/components/Timers/LevelUpTimer.tsx).

### Configuration

- **Vite**: Fast build tool configured in [`vite.config.ts`](vite.config.ts).
- **ESLint**: Linting configured in [`eslint.config.js`](eslint.config.js).
- **Tailwind CSS**: Utility-first CSS framework configured in [`tailwind.config.js`](tailwind.config.js).

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/LucasDaSilva96/Interval-App---for-all-you-timing-needs.git
   cd INTERVAL-APP
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

- **Development Mode**:

  ```sh
  npm run dev
  ```

- **Build**:

  ```sh
  npm run build
  ```

- **Preview**:

  ```sh
  npm run preview
  ```

- **Lint**:
  ```sh
  npm run lint
  ```

## License

This project is licensed under the MIT License.

[LICENSE](https://github.com/LucasDaSilva96/Interval-App---for-all-you-timing-needs/blob/main/LICENSE)
