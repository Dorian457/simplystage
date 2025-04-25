export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9F9F9] p-6">
      <h1 className="text-4xl font-extrabold mb-4 text-center text-[#1C1C1E]">Trouvez votre stage simplement</h1>
      <p className="text-lg text-center text-gray-600 max-w-xl mb-6">SimplyStage vous met en relation avec les meilleures entreprises pour décrocher facilement votre prochain stage.</p>
      <a href="/signup" className="bg-[#6C63FF] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#574fe1] transition">Commencer maintenant</a>
    </div>
  );
}