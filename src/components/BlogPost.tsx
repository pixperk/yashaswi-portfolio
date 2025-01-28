'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function PdfViewer() {
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Hardcoded PDF URL
  const pdfUrl = 'https://gjb061cz3m.ufs.sh/f/7495b5e8-1ec8-4b06-9981-317b763ddcdb-wz4fzj.pdf';

  useEffect(() => {
    const fetchPdfContent = async () => {
      try {
        const response = await fetch(`/api/parse-pdf?url=${encodeURIComponent(pdfUrl)}`);
        const data = await response.json();
        setMarkdown(data.text || 'No content extracted');
      } catch (error) {
        console.error('Failed to load PDF content:', error);
        setMarkdown('Error fetching PDF');
      }
      setLoading(false);
    };

    fetchPdfContent();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-4">Extracted PDF Content</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="prose prose-invert max-w-full">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
