import HeroDiv from "./heroDiv";
import BadgeEspecialist from "./badgeEspecialist";
import MainText from "./mainText";
import SubTitle from "./subTitle";
import { Code, Heart, MessageCircle } from "lucide-react";
import { handleWhatsAppClick } from "../utils/whatsappConfig";
import HeroSideContent from "./HeroSideContent";

export default function HeroSection() {
  return (
    <HeroDiv>
      <BadgeEspecialist />
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col">
          <MainText labelText="Cada detalhe pensado em você:" />

          <MainText
            labelText="Sites Personalizados"
            styleText="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          />

          <MainText labelText="para Cada Emoção" styleh1="mb-12" />

          <SubTitle
            labelText="Transformo suas memórias em realidade online, com"
            styleText="text-slate-600"
          />

          <div className="flex gap-1 flex-wrap">
            <SubTitle
              labelText="paixão"
              styleText="text-red-500 font-semibold inline"
            />
            <SubTitle labelText="e" styleText="text-slate-600 inline" />
            <SubTitle
              labelText="tecnologia."
              styleText="text-blue-600 font-semibold inline"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-slate-700">
                Sites de Homenagem
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
              <Code className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-slate-700">
                Sistemas Completos
              </span>
            </div>
          </div>

          <div className="space-y-4 mt-4">
            <button
              onClick={handleWhatsAppClick}
              className="cursor-pointer w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
              Fale Comigo no WhatsApp
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 justify-center flex">
          <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-md w-full ">
            <p className="mb-4 text-2xl">
              Exemplo de Site de Homenagem Personalizado:{" "}
            </p>
            <HeroSideContent />
          </div>
        </div>
      </div>
    </HeroDiv>
  );
}
