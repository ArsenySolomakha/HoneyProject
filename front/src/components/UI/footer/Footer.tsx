import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.svg';
import Email from '@/assets/images/icon-email.svg';
import Phone from '@/assets/images/icon-phone.svg';
import FaceBook from '@/assets/images/icon-fb.svg';
import Instagram from '@/assets/images/icon-in.svg';
import YouTube from '@/assets/images/icon-yt.svg';
import cls from '../../../styles/_footer.module.scss';

const Footer = () => {
  const { t } = useTranslation('footer');
  return (
    <footer className={cls.footer}>
      <span className={cls.flower_left}></span>
      <div className={cls.logo_block}>
        <Link href={'/'} className={cls.footer_inner_logo}>
          <Image priority src={Logo.src} alt="Footer-logo" width={146} height={57} />
        </Link>
      </div>
      <div className={cls.footer_inner}>
        <div className={cls.footer_inner_box_links}>
          <h3>{t('customers')}</h3>
          <Link href={'/faq'}>{t('order')}</Link>
          <Link href={'/delivery'}>{t('delivery')}</Link>
        </div>

        <div className={cls.footer_inner_box_links}>
          <h3>{t('company')}</h3>
          <Link href={'/about'}>{t('about')}</Link>
          <Link href={'/contacts'}>{t('contacts')}</Link>
        </div>

        <div className={cls.footer_inner_box_links}>
          <h3>{t('contacts')}</h3>
          <span>
            <svg xmlns={Email.src} width="17" height="15" viewBox="0 0 17 15" fill="#000000">
              <path
                d="M4.72222 13.125C3.96667 13.125 3.21111 12.4688 2.83333 12.1875C0.944444 10.875 0.377778 10.4062 0 10.125V14.0625C0 14.5802 0.422934 15 0.944444 15H8.5C9.02151 15 9.44444 14.5802 9.44444 14.0625V10.125C9.06667 10.4062 8.5 10.875 6.61111 12.1875C6.23333 12.4688 5.47778 13.125 4.72222 13.125ZM8.5 7.5H0.944444C0.422934 7.5 0 7.91982 0 8.4375V8.90625C0.755556 9.46875 0.661111 9.46875 3.4 11.4375C3.68333 11.625 4.25 12.1875 4.72222 12.1875C5.19444 12.1875 5.76111 11.625 6.04444 11.5312C8.78333 9.5625 8.68889 9.5625 9.44444 9V8.4375C9.44444 7.91982 9.02151 7.5 8.5 7.5ZM16.0556 4.6875H6.61111C6.0896 4.6875 5.66667 5.10732 5.66667 5.625V6.5625H8.5C9.48016 6.5625 10.2882 7.30723 10.3803 8.25645L10.3889 8.25V12.1875H16.0556C16.5771 12.1875 17 11.7677 17 11.25V5.625C17 5.10732 16.5771 4.6875 16.0556 4.6875ZM15.1111 8.4375H13.2222V6.5625H15.1111V8.4375ZM4.72222 5.625C4.72222 4.59111 5.56957 3.75 6.61111 3.75H13.2222V0.9375C13.2222 0.419824 12.7993 0 12.2778 0H2.83333C2.31182 0 1.88889 0.419824 1.88889 0.9375V6.5625H4.72222V5.625Z"
                fill="black"
              />
            </svg>
            <a href="mailto:infokyrgyzstanhoney@gmail.com">infokyrgyzstanhoney@gmail.com</a>
          </span>
          <span>
            <svg xmlns={Phone.src} width="15" height="15" viewBox="0 0 15 15" fill="#000000">
              <path
                d="M14.5722 10.5995L11.2909 9.19326C11.1507 9.13352 10.995 9.12093 10.847 9.15739C10.6991 9.19385 10.567 9.27738 10.4706 9.39541L9.01744 11.1708C6.73686 10.0956 4.90151 8.26021 3.82624 5.97963L5.60166 4.52647C5.71993 4.43028 5.80363 4.29818 5.84011 4.15016C5.87659 4.00215 5.86384 3.84628 5.80381 3.70615L4.39754 0.42484C4.33165 0.273785 4.21512 0.150453 4.06804 0.0761123C3.92097 0.00177107 3.75256 -0.0189204 3.59186 0.0176058L0.544931 0.720743C0.389998 0.756521 0.251766 0.843757 0.152796 0.968214C0.0538267 1.09267 -3.56904e-05 1.247 1.77431e-08 1.40601C1.77431e-08 8.92079 6.09093 15 13.594 15C13.753 15.0001 13.9074 14.9463 14.032 14.8473C14.1565 14.7483 14.2438 14.6101 14.2795 14.4551L14.9827 11.4081C15.019 11.2467 14.9978 11.0776 14.9229 10.93C14.848 10.7824 14.724 10.6656 14.5722 10.5995Z"
                fill="black"
              />
            </svg>
            <a href="tel:+996700505405">+996 700 505 405</a>
          </span>
        </div>
      </div>
      <div className={cls.footer_inner_box_links}>
        <div className={cls.footer_inner_box_links_icons}>
          <a href="https://www.facebook.com/amangreenfood?locale=ru_RU">
            <svg xmlns={FaceBook.src} width="28" height="28" viewBox="0 0 28 28" fill="#ffffff">
              <path
                d="M11.1831 23.8247L11.1549 15.2282H7.4707V11.544H11.1549V9.08782C11.1549 5.77301 13.2076 4.17554 16.1647 4.17554C17.5811 4.17554 18.7985 4.28099 19.1533 4.32812V7.79229L17.1024 7.79322C15.4942 7.79322 15.1828 8.55742 15.1828 9.67881V11.544H19.7514L18.5233 15.2282H15.1828V23.8247H11.1831Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/kyrgyzstanhoney/">
            <svg xmlns={Instagram.src} width="22" height="22" viewBox="0 0 22 22" fill="#ffffff">
              <path
                d="M4.15715 1.05568C3.45932 1.32706 2.86918 1.6889 2.27904 2.27904C1.6889 2.86487 1.32706 3.45932 1.05568 4.15284C0.792917 4.82483 0.616305 5.59589 0.564614 6.72448C0.512923 7.85307 0.5 8.21491 0.5 11.0924C0.5 13.9699 0.512923 14.3317 0.564614 15.4603C0.616305 16.5889 0.797224 17.3599 1.05568 18.0319C1.32706 18.7298 1.6889 19.3199 2.27904 19.91C2.86918 20.5002 3.45932 20.862 4.15715 21.1334C4.82914 21.3962 5.6002 21.5728 6.72879 21.6245C7.85738 21.6762 8.21922 21.6891 11.0967 21.6891C13.9742 21.6891 14.336 21.6762 15.4646 21.6245C16.5932 21.5728 17.3642 21.3918 18.0362 21.1334C18.7341 20.862 19.3242 20.5002 19.9143 19.91C20.5045 19.3199 20.8663 18.7298 21.1377 18.0319C21.4005 17.3599 21.5771 16.5889 21.6288 15.4603C21.6805 14.3317 21.6934 13.9699 21.6934 11.0924C21.6934 8.21491 21.6805 7.85307 21.6288 6.72448C21.5771 5.59589 21.3962 4.82483 21.1377 4.15284C20.8663 3.45932 20.5045 2.86487 19.9186 2.27904C19.3285 1.6889 18.7384 1.32706 18.0405 1.05568C17.3686 0.792917 16.5975 0.616305 15.4689 0.564614C14.3403 0.512923 13.9785 0.5 11.101 0.5C8.22352 0.5 7.86168 0.512923 6.73309 0.564614C5.6002 0.611998 4.82914 0.792917 4.15715 1.05568ZM15.3784 2.46857C16.4123 2.51596 16.9723 2.68826 17.347 2.83472C17.8424 3.02856 18.1956 3.25686 18.5661 3.62732C18.9365 3.99777 19.1648 4.35099 19.3587 4.84637C19.5051 5.22113 19.6774 5.78111 19.7248 6.81494C19.7765 7.93061 19.7851 8.2666 19.7851 11.0967C19.7851 13.9268 19.7722 14.2628 19.7248 15.3784C19.6774 16.4123 19.5051 16.9723 19.3587 17.347C19.1648 17.8424 18.9365 18.1956 18.5661 18.5661C18.1956 18.9365 17.8424 19.1648 17.347 19.3587C16.9723 19.5051 16.4123 19.6774 15.3784 19.7248C14.2628 19.7765 13.9268 19.7851 11.0967 19.7851C8.2666 19.7851 7.93061 19.7722 6.81494 19.7248C5.78111 19.6774 5.22113 19.5051 4.84637 19.3587C4.35099 19.1648 3.99777 18.9365 3.62732 18.5661C3.25686 18.1956 3.02856 17.8424 2.83472 17.347C2.68826 16.9723 2.51596 16.4123 2.46857 15.3784C2.41688 14.2628 2.40827 13.9268 2.40827 11.0967C2.40827 8.2666 2.42119 7.93061 2.46857 6.81494C2.51596 5.78111 2.68826 5.22113 2.83472 4.84637C3.02856 4.35099 3.25686 3.99777 3.62732 3.62732C3.99777 3.25686 4.35099 3.02856 4.84637 2.83472C5.22113 2.68826 5.78111 2.51596 6.81494 2.46857C7.93061 2.41688 8.2666 2.40827 11.0967 2.40827C13.9268 2.40827 14.2628 2.41688 15.3784 2.46857Z"
                fill="white"
              />
              <path
                d="M5.65625 11.0967C5.65625 14.1034 8.09435 16.5372 11.0967 16.5372C14.0991 16.5372 16.5372 14.0991 16.5372 11.0967C16.5372 8.09435 14.1034 5.65625 11.0967 5.65625C8.09004 5.65625 5.65625 8.09004 5.65625 11.0967ZM14.629 11.0967C14.629 13.0481 13.0481 14.629 11.0967 14.629C9.1454 14.629 7.56452 13.0481 7.56452 11.0967C7.56452 9.1454 9.1454 7.56452 11.0967 7.56452C13.0481 7.56452 14.629 9.1454 14.629 11.0967Z"
                fill="white"
              />
              <path
                d="M16.7568 6.71165C17.4586 6.71165 18.0276 6.14272 18.0276 5.44091C18.0276 4.7391 17.4586 4.17017 16.7568 4.17017C16.055 4.17017 15.4861 4.7391 15.4861 5.44091C15.4861 6.14272 16.055 6.71165 16.7568 6.71165Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://www.youtube.com/watch?v=C9N5YLK_9mk">
            <svg xmlns={YouTube.src} width="24" height="16" viewBox="0 0 24 16" fill="#ffffff">
              <path
                d="M4.3989 0.0100098H19.6009C21.7484 0.0100098 23.4898 1.75145 23.4898 3.8989V12.0302C23.4898 14.1777 21.7484 15.9191 19.6009 15.9191H4.3989C2.25145 15.9191 0.51001 14.1777 0.51001 12.0302V3.8989C0.51001 1.75145 2.25145 0.0100098 4.3989 0.0100098ZM9.52516 11.4999L12.9721 9.73223L16.4191 7.96456L9.52516 4.4292V11.4999Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <p className={cls.footer_reserved_text}>{t('rights')}</p>
      <span className={cls.flower_right}></span>
    </footer>
  );
};

export default Footer;
