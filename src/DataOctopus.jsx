import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import "./DataOctopus.css";

function DataOctopus() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-page fade-in">
      <div className="container">
        {/* Title - Outside the card */}
        <h1 className="gradient-title">Data Octopus</h1>
        <p className="tagline">
          Purpose-built platform for data-intensive and regulated industries
        </p>
        
        {/* Hero Section */}
        <section className="hero-main" data-section="hero">
          <h2 className="hero-subtitle">Privacy-First Data Governance & Transformation Platform</h2>
          <p className="lead">
            Data Octopus is a privacy-first data governance and transformation platform. 
            It enables organizations to securely manage, anonymize, and activate data for 
            analytics, collaboration, and AI training—without compromising privacy.
          </p>
          <p>
            Using advanced techniques like tokenization, redaction, and synthetic data generation, 
            it ensures safe data use while meeting compliance standards such as HIPAA, GDPR, and CCPA.
          </p>
          
          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="badge">🔒 SOC 2 Compliant</div>
            <div className="badge">✓ HIPAA Ready</div>
            <div className="badge">✓ GDPR Aligned</div>
            <div className="badge">✓ Enterprise-Grade</div>
          </div>
        </section>

        <main>

          {/* Workflow Section */}
          <section data-section="workflow" className={visibleSections.has("workflow") ? "reveal-active" : "reveal"}>
            <h2>How It Works</h2>
            <p className="section-intro">
              Data Octopus ingests structured and unstructured inputs—including SQL, files, 
              videos—and transforms them through anonymization, classification, and 
              de-identification. It outputs clean, governed datasets ready for downstream use.
            </p>

            <div className="workflow">
              {[
                { num: 1, title: "Configure" },
                { num: 2, title: "Customize" },
                { num: 3, title: "Create" },
                { num: 4, title: "Schedule" },
              ].map((step) => (
                <div key={step.num} className="step">
                  <div className="step-number">{step.num}</div>
                  <h3>{step.title}</h3>
                </div>
              ))}
            </div>

            <p className="workflow-desc">
              The simple four-step workflow ensures quick and intuitive deployment.
            </p>
          </section>

          {/* Benefits Section */}
          <section data-section="benefits" className={visibleSections.has("benefits") ? "reveal-active" : "reveal"}>
            <h2>Key Benefits</h2>
            <div className="benefits-grid">
              {[
                {
                  title: "Centralized Data",
                  desc: "Consolidates fragmented data across your organization",
                },
                {
                  title: "Compliance",
                  desc: "Ensures adherence to HIPAA, GDPR, and CCPA regulations",
                },
                {
                  title: "Secure Collaboration",
                  desc: "Facilitates secure data sharing and collaboration",
                },
                {
                  title: "AI & Development",
                  desc: "Accelerates AI and app development with safe, realistic synthetic data",
                },
                {
                  title: "Data Quality",
                  desc: "Enhances data quality and consistency",
                },
                {
                  title: "Full Traceability",
                  desc: "Delivers complete lineage and audit trails",
                },
              ].map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section data-section="usecases" className={visibleSections.has("usecases") ? "reveal-active" : "reveal"}>
            <h2>Real-World Use Cases</h2>
            {[
              {
                title: "Healthcare Providers",
                desc: "Anonymize patient records for AI insights without exposing PHI. Hospitals can train AI models using synthetic patient records, avoiding exposure of real PHI.",
              },
              {
                title: "Financial Institutions",
                desc: "Utilize protected transaction data for internal audits and fraud analytics. Banks detect fraud patterns with anonymized transaction streams.",
              },
              {
                title: "Software Teams & AI Labs",
                desc: "Use synthetic datasets in place of production data—maintaining development security and scalability.",
              },
            ].map((useCase, index) => (
              <div key={index} className="use-case">
                <h3>{useCase.title}</h3>
                <p>{useCase.desc}</p>
              </div>
            ))}
          </section>

          {/* Features Section */}
          <section data-section="features" className={visibleSections.has("features") ? "reveal-active" : "reveal"}>
            <h2>Core Features</h2>
            <div className="features-list">
              {[
                {
                  title: "Centralized Tokenization Engine",
                  desc: "Real-time masking of sensitive data with automated protection mechanisms",
                },
                {
                  title: "Synthetic Data Generator",
                  desc: "Generates safe, realistic datasets for development and testing purposes",
                },
                {
                  title: "Seamless Interoperability",
                  desc: "Functions across EHRs, CRMs, APIs, and databases",
                },
                {
                  title: "Data Transformation",
                  desc: "Converts raw inputs into structured, queryable datasets",
                },
                {
                  title: "Complete Governance",
                  desc: "Access logging and data lineage for comprehensive traceability",
                },
              ].map((feature, index) => (
                <div key={index} className="feature">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Section */}
          <section className="architecture">
            <h2>Architecture & Technology</h2>
            <p>
              Data Octopus is powered by a robust backend, integrated with GCP Cloud Run, 
              Databricks, and Vertex AI. It supports ingestion from SQL, Oracle, AWS, Google Cloud, 
              and additional sources.
            </p>
            <p>
              The architecture enforces policy-driven governance and traceability throughout the full 
              data lifecycle—secure, scalable, and cloud-ready.
            </p>
          </section>

          {/* Summary Section */}
          <section className="summary">
            <h2>Privacy Without Compromise</h2>
            <p>
              Every transformation is secure, audited, and regulation-aligned. With structured 
              ingestion, automated masking, and comprehensive audit logs, Data Octopus ensures privacy without 
              hindering innovation.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="copyright subtle-footer">
          © 2025 Data Octopus. Privacy-first data governance for regulated
          industries.
        </footer>
      </div>
    </div>
  );
}

export default DataOctopus;
