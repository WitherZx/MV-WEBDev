"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://api.whatsapp.com/send?phone=554198364028&text=Olá! Gostaria de um orçamento."
            target="_blank"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-[200] p-4 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center cursor-pointer"
        >
            <MessageCircle size={32} fill="white" />
        </motion.a>
    );
}
