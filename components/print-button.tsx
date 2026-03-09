"use client";

import React from "react";
import { Download } from "lucide-react";

export function PrintButton() {
    return (
        <button
            className="p-3 bg-white text-black border border-white rounded-xl hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] transition-all duration-300 flex text-sm font-bold ml-auto"
            title="Imprimir / Salvar PDF"
            onClick={() => window.print()}
        >
            <Download size={18} />
        </button>
    );
}
