import React from 'react';

const Footer = () => (
    <footer className="w-full max-w-md text-center text-xs text-gray-500 mt-8">
        <div className="flex justify-center gap-2 flex-wrap">
            <a href="#" className="hover:text-gray-400">Termos de Uso</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400">Cookies</a>
        </div>
    </footer>
);

export default Footer;