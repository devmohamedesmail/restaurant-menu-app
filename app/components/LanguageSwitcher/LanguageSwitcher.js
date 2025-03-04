'use client';

import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  console.log('Current language:', i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log('Language changed to:', lng);
  };

  return (
   <div className='container m-auto px-5'>
     <div className='border border-amber-600 w-fit my-4'>
      <button className={`p-2 transition-colors ease-in-out duration-500 text-sm ${i18n.language === 'en' ? 'bg-amber-600 text-white' : 'bg-transparent'} `} onClick={() => changeLanguage('en')}>English</button>
      <button className={`p-2 transition-colors ease-in-out duration-500 text-sm ${i18n.language === 'ar' ? 'bg-amber-600 text-white' : 'bg-transparent'} `} onClick={() => changeLanguage('ar')}>Arabic</button>
    </div>
   </div>
  );
};

export default LanguageSwitcher;
