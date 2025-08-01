import { Sparkles } from "lucide-react";

const BadgeEspecialist = () => {
  return (
    <div className="mb-10 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200 shadow">
      <Sparkles className="w-4 h-4" />
      Desenvolvedor Especialista em Projetos Emocionais
    </div>
  );
};

export default BadgeEspecialist;
