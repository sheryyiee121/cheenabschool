"use client";

import { X } from "lucide-react";

interface PDFModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 backdrop-blur-sm p-4 sm:p-6 transition-opacity">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] sm:h-[90vh] flex flex-col relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50 shrink-0">
                    <h3 className="font-bold text-navy text-lg">{title}</h3>
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="p-1.5 text-slate-500 hover:text-sky-primary bg-white rounded-md border border-slate-200 hover:border-sky-primary transition-colors focus:outline-none focus:ring-2 focus:ring-sky-primary/30"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                {/* Content */}
                <div className="flex-1 w-full bg-slate-200 relative">
                    <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        className="absolute inset-0 w-full h-full border-none"
                        title={title}
                    />
                </div>
            </div>
        </div>
    );
}
