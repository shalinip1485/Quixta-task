"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import {
    ExpandableChat,
    ExpandableChatHeader,
    ExpandableChatBody,
    ExpandableChatFooter
} from "./ui/ExpandableChat";
import { getChatResponse } from "../services/gemini";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const quickQuestions = [
    "What is Mareana Connect?",
    "How does Batch Report Copilot work?",
    "What problems does Mareana solve?",
    "How does the rule engine work?",
    "Can I request a demo?",
];

export function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hello! I'm Brian Haering. How can I help you with the Batch Release Copilot today?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleSend = async (text: string) => {
        if (!text.trim() || loading) return;

        const newMessages: Message[] = [...messages, { role: "user", content: text }];
        setMessages(newMessages);
        setInputValue("");
        setLoading(true);

        const history = messages
            .filter(m => m.content !== messages[0].content)
            .map(m => ({
                role: (m.role === "user" ? "user" : "model") as "user" | "model",
                parts: [{ text: m.content }]
            }));

        const response = await getChatResponse(text, history);

        setMessages([...newMessages, { role: "assistant", content: response }]);
        setLoading(false);
    };

    return (
        <ExpandableChat position="bottom-right" size="md">
            <ExpandableChatHeader className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] flex items-center justify-center overflow-hidden">
                        <img
                            src="/assets/User-Avatar.svg"
                            alt="Brian Haering"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#1a181b] dark:text-white font-semibold text-base" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Brian Haering
                            </h3>
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </div>
                        </div>
                        <span className="text-xs text-[#8a8a8a]" style={{ fontFamily: "Poppins, sans-serif" }}>
                            Ask anything about Batch Release Copilot
                        </span>
                    </div>
                </div>
            </ExpandableChatHeader>

            <ExpandableChatBody className="bg-white dark:bg-[#161616] p-0 flex flex-col min-h-0 flex-1">
                <div className="flex-1 overflow-y-auto w-full p-4 space-y-4">
                    <AnimatePresence initial={false}>
                        {messages.map((message, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${message.role === "user"
                                        ? "bg-[#4CC9F0] text-white rounded-tr-none shadow-md"
                                        : "bg-[#f0f3f7] dark:bg-[rgba(255,255,255,0.05)] text-[#1a181b] dark:text-[#f0f3f7] rounded-tl-none border border-[#eee] dark:border-[rgba(255,255,255,0.1)]"
                                        }`}
                                    style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                    {message.content}
                                </div>
                            </motion.div>
                        ))}
                        {loading && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-start"
                            >
                                <div className="bg-[#f0f3f7] dark:bg-[rgba(255,255,255,0.05)] p-3 rounded-2xl rounded-tl-none border border-[#eee] dark:border-[rgba(255,255,255,0.1)]">
                                    <Loader2 className="h-4 w-4 animate-spin text-[#4CC9F0]" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div ref={messagesEndRef} />
                </div>

                <div className="px-4 py-3 flex flex-wrap gap-2 bg-white/10 dark:bg-black/10 border-t border-[#eee] dark:border-[rgba(255,255,255,0.1)]">
                    {quickQuestions.map((q, i) => (
                        <button
                            key={i}
                            onClick={() => handleSend(q)}
                            className="text-[11px] px-3 py-1.5 rounded-full border border-[#4CC9F0] text-[#4CC9F0] hover:bg-[#4CC9F0] hover:text-white transition-all whitespace-nowrap"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                            disabled={loading}
                        >
                            {q}
                        </button>
                    ))}
                </div>
            </ExpandableChatBody>

            <ExpandableChatFooter className="bg-white dark:bg-[#161616]">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSend(inputValue);
                    }}
                    className="flex items-center gap-2"
                >
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow bg-transparent border-none focus:ring-0 text-sm py-2 text-[#1a181b] dark:text-white placeholder:text-[#8a8a8a]"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading || !inputValue.trim()}
                        className="p-2.5 rounded-xl bg-[#4CC9F0] text-white disabled:opacity-50 disabled:grayscale transition-all hover:scale(1.05) active:scale(0.95)"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </form>
            </ExpandableChatFooter>
        </ExpandableChat>
    );
}
