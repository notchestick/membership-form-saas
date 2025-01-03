import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pl', name: 'Polski' },
    { code: 'de', name: 'Deutsch' }
  ];

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-5 h-5 text-navy-600" />
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
        className="bg-white border border-navy-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;