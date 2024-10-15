import React from 'react';
import { DiscordIcon, TwitterIcon, YoutubeIcon, MailIcon } from 'lucide-react';

const Social: React.FC = () => {
  return (
    <div className="social">
      <h1 className="text-center mb-4">Connect with Us</h1>
      <div className="social-icons text-center">
        <a href="https://discord.gg/your-discord" target="_blank" rel="noopener noreferrer">
          <DiscordIcon />
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://youtube.com/your-youtube" target="_blank" rel="noopener noreferrer">
          <YoutubeIcon />
        </a>
        <a href="mailto:contact@lithiumelectro.com">
          <MailIcon />
        </a>
      </div>
    </div>
  );
};

export default Social;