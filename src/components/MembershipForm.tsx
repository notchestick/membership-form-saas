import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const MembershipForm: React.FC = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-navy-50 rounded-lg">
        <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <p className="text-xl font-semibold text-navy-900">{t('form.success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-navy-700">
            {t('form.firstName')}
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700">
            {t('form.lastName')}
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700">
          {t('form.email')}
        </label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700">
          {t('form.company')}
        </label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700">
          {t('form.role')}
        </label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700">
          {t('form.plan')}
        </label>
        <select
          required
          className="mt-1 block w-full rounded-md border-navy-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
        >
          <option value="basic">{t('form.plans.basic')}</option>
          <option value="pro">{t('form.plans.pro')}</option>
          <option value="enterprise">{t('form.plans.enterprise')}</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-navy-600 text-white py-2 px-4 rounded-md hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
      >
        {t('form.submit')}
      </button>
    </form>
  );
};

export default MembershipForm;