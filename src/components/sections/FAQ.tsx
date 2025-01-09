import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full py-4 flex justify-between items-center text-left"
      onClick={onToggle}
    >
      <span className="font-medium">{question}</span>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && (
      <div className="pb-4 text-gray-600">
        {answer}
      </div>
    )}
  </div>
);

const faqs = [
  
  {
    question: "Sind die Bilder manipuliert oder bearbeitet?",
    answer: "Nein, die Bilder sind unbearbeitet und werden genau so gezeigt, wie sie von der KI generiert wurden. Es wurden keine nachträglichen Änderungen vorgenommen, um die Authentizität der KI-Interpretation zu bewahren."
  },
  {
    question: "Stellen die Visionen eine Wahlempfehlung dar?",
    answer: "Nein, absolut nicht. Die Visionen dienen dazu, Dir die Parteiprogramme zu veranschaulichen und Dich zur kritischen Auseinandersetzung mit den politischen Zielen anzuregen. Sie sind keine Wahlempfehlung und ersetzen nicht Deine Recherche zu den einzelnen Parteien."
  },
  {
    question: "Warum sehen die Visionen so unterschiedlich aus?",
    answer: "Die Unterschiede in den Visionen spiegeln die verschiedenen Schwerpunkte und Ziele der Parteiprogramme wider. Die KI interpretiert diese Unterschiede und übersetzt sie in visuelle Elemente, wodurch die charakteristischen Merkmale der jeweiligen politischen Ausrichtungen deutlich werden."
  },
  {
    question: "Wie objektiv sind diese KI-generierten Visionen?",
    answer: "Die Visionen basieren auf den offiziellen Wahlprogrammen, aber wie jede Interpretation - ob durch Menschen oder KI - können sie nicht vollständig objektiv sein. Sie sind als kreative Visualisierung zu verstehen, die Dich zum Nachdenken und zur Diskussion über verschiedene politische Zukunftsvorstellungen anregen soll."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8">Informationen / FAQ</h2>
        
        {/* Methodology Section */}
        <div className="bg-white rounded-lg p-6 mb-12 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Die Methodik</h3>
          <p className="text-gray-600">
            Für dieses Projekt wurde folgender Ansatz gewählt:
          </p>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-600">
            <li>Die offiziellen Wahlprogramme der Parteien wurden in ChatGPT eingespeist</li>
            <li>Prompt: "Fasse mir dieses Wahlprogramm zusammen"</li>
            <li>Prompt: "Generiere ein Bild unserer Zukunft, wenn dieses Wahlprogramm zu 100% umgesetzt werden würde."</li>
<p>Falls du selbst Bilder generieren willst: Ich habe bereits ein Custom GPT mit den Wahlprogrammen gefüttert. Du kannst dieses kostenlos  <a 
            href="https://chatgpt.com/g/g-67628cbdf73481919652061b54003d6b-bundestagswahl-2025"
            className="text-blue-600 hover:text-blue-800"
          >über diesen Link</a> benutzen. Du benötigst unter Umständen einen OpenAI Account. </p>
          <p>Du kannst den Chatbot natürlich auch andere Dinge fragen, beispielsweise wie eine gewisse Partei zum Klimaschutz steht, was für Vorschläge alle Parteien zur Migration haben oder du lässt dir eine Kurzbeschreibung der Wahlprogramme geben. Probiere es gerne aus, beachte aber, dass ChatGPT Fehler machen kann und du in jedem Fall deinen Output überprüfen solltest!</p>
          </ol>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Häufig gestellte Fragen</h3>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}