// Tipagem para a prop 'logo'
// Usamos o tipo 'ImageMetadata' do Astro
import type { ImageMetadata } from "astro";
import React from "react";

// 1. Defina a interface para as props
interface HeaderProps {
  logo: ImageMetadata;
}

// 2. Desestruture a prop 'logo'
const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <div className="p-4 border-b border-base-200 bg-primary backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* 3. Use a tag <img> com os dados da logo */}
        <div className="flex items-center gap-4">
          <img
            // Acesso ao URL final do asset otimizado
            src={logo.src}
            alt="Logo Core Fibra"
            // Use as dimensões do objeto para evitar 'Cumulative Layout Shift'
            width={logo.width}
            height={logo.height}
            className="h-8 w-auto" // Ajuste o tamanho da logo com classes Tailwind
          />
          <span className="font-semibold text-lg text-primary-content hidden sm:block">
            Core Fibra
          </span>
        </div>

        <div className="flex gap-2">
          <button className="btn text-white btn-secondary btn-sm rounded-full">
            FALE COM UM ESPECIALISTA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
