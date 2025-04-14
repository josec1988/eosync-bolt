# EOS Model Visualization

This project provides an interactive visualization of the Entrepreneurial Operating System® (EOS) model, including its key components, integration flow, and decision-making framework.

## Features

- Interactive display of the six EOS components
- Visual flowchart of EOS implementation
- Decision-making framework visualization
- Downloadable slide deck
- Text message opt-in for updates (Twilio compliance form that sends data to jose@eosync.io)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/eos-model-visualization.git
cd eos-model-visualization
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Formspree Integration

The Twilio compliance form uses Formspree to submit contact information to jose@eosync.io. The form collects:

- First and last name
- Phone number
- Optional email
- Explicit consent to receive messages

## Updating the Project on GitHub

If you've made changes to the project locally and want to update the GitHub repository, follow these steps:

1. Stage your changes
```bash
git add .
```

2. Commit your changes with a descriptive message
```bash
git commit -m "Add Twilio compliance form with Formspree integration"
```

3. Push your changes to GitHub
```bash
git push origin main
```

## Built With

- React
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Formspree (for form submission)

## Project Structure

- `src/components/` - Contains reusable components
- `src/App.tsx` - Main application component
- `public/` - Static assets

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- The Entrepreneurial Operating System® (EOS®) is a registered trademark.
```