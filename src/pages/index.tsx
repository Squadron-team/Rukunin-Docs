import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import RukuninAppLogo from '@site/static/img/rukunin_logo.png';
import RukuninResidentHomeScreen from '@site/static/img/rukunin_resident_home_screen.png';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.welcomeCard}>
              <div className={styles.iconWrapper}>
                <img 
                  src={RukuninAppLogo} 
                  alt="Rukunin Logo" 
                  className={styles.logoImage}
                />
              </div>
              <div>
                <p className={styles.greeting}>Selamat datang di</p>
                <Heading as="h1" className={styles.heroTitle}>
                  {siteConfig.title}
                </Heading>
              </div>
            </div>
            <p className={styles.heroSubtitle}>
              Solusi digital untuk manajemen RT/RW yang modern, efisien, dan mudah digunakan
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--lg', styles.primaryButton)}
                to="/docs/getting-started">
                Mulai Sekarang →
              </Link>
              <Link
                className={clsx('button button--lg', styles.secondaryButton)}
                to="/docs/intro">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.mockupCard}>
              <img src={RukuninResidentHomeScreen} alt="Rukunin App" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

function FeatureCard({icon, title, description, color}: FeatureCardProps) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrapper} style={{backgroundColor: color}}>
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: '💰',
      title: 'Manajemen Iuran',
      description: 'Kelola pembayaran iuran warga dengan sistem digital yang transparan dan mudah',
      color: '#FFAB00',
    },
    {
      icon: '📄',
      title: 'Pengajuan Surat',
      description: 'Proses pengajuan surat menyurat menjadi lebih cepat dan efisien',
      color: '#4CAF50',
    },
    {
      icon: '📅',
      title: 'Kalender Kegiatan',
      description: 'Pantau dan kelola jadwal kegiatan warga dengan mudah',
      color: '#2196F3',
    },
    {
      icon: '📢',
      title: 'Pengumuman',
      description: 'Sampaikan informasi penting kepada seluruh warga dengan cepat',
      color: '#FF9800',
    },
    {
      icon: '👥',
      title: 'Data Warga',
      description: 'Kelola database warga dengan sistem yang terorganisir',
      color: '#9C27B0',
    },
    {
      icon: '📊',
      title: 'Laporan & Statistik',
      description: 'Dashboard lengkap untuk monitoring aktivitas RT/RW',
      color: '#EF5350',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Fitur Unggulan
          </Heading>
          <p className={styles.sectionSubtitle}>
            Berbagai fitur yang dirancang untuk mempermudah pengelolaan RT/RW
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RolesSection() {
  const roles = [
    {
      icon: '👤',
      role: 'Admin',
      description: 'Kelola sistem dan hak akses pengguna',
      link: '/docs/intro',
    },
    {
      icon: '👔',
      role: 'Ketua RW',
      description: 'Monitor dan kelola seluruh RT di wilayah RW',
      link: '/docs/intro',
    },
    {
      icon: '👔',
      role: 'Ketua RT',
      description: 'Kelola data dan kegiatan warga RT',
      link: '/docs/intro',
    },
    {
      icon: '📝',
      role: 'Sekretaris',
      description: 'Kelola surat dan administrasi',
      link: '/docs/intro',
    },
    {
      icon: '💰',
      role: 'Bendahara',
      description: 'Kelola keuangan dan iuran warga',
      link: '/docs/intro',
    },
    {
      icon: '🏠',
      role: 'Warga',
      description: 'Akses layanan dan informasi RT/RW',
      link: '/docs/intro',
    },
  ];

  return (
    <section className={styles.roles}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Panduan Berdasarkan Role
          </Heading>
          <p className={styles.sectionSubtitle}>
            Dokumentasi khusus untuk setiap peran dalam aplikasi
          </p>
        </div>
        <div className={styles.rolesGrid}>
          {roles.map((role, idx) => (
            <Link key={idx} to={role.link} className={styles.roleCard}>
              <div className={styles.roleIcon}>{role.icon}</div>
              <h3 className={styles.roleTitle}>{role.role}</h3>
              <p className={styles.roleDescription}>{role.description}</p>
              <span className={styles.roleLink}>Pelajari →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaCard}>
          <Heading as="h2" className={styles.ctaTitle}>
            Siap untuk memulai?
          </Heading>
          <p className={styles.ctaDescription}>
            Pelajari cara menggunakan Rukunin dan tingkatkan pengelolaan RT/RW Anda
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx('button button--lg', styles.ctaPrimaryButton)}
              to="/docs/getting-started">
              Mulai Sekarang
            </Link>
            <Link
              className={clsx('button button--lg', styles.ctaSecondaryButton)}
              to="https://github.com/Squadron-team/Rukunin-App">
              <span>⭐ GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Dokumentasi`}
      description="Dokumentasi aplikasi manajemen RT/RW yang modern dan efisien">
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <RolesSection />
        <CTASection />
      </main>
    </Layout>
  );
}
