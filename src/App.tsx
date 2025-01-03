import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import MembershipForm from './components/MembershipForm';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-50 to-navy-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-end mb-6">
          <LanguageSwitcher />
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-navy-900 text-center mb-2">
            {t('title')}
          </h1>
          <p className="text-navy-600 text-center mb-8">
            {t('description')}
          </p>
          
          <MembershipForm />
        </div>
      </div>
    </div>
  );
}

export default App;