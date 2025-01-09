import Exhibition from './Exhibition';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8">Über das Projekt</h2>
        
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            Dieses Projekt verfolgt zwei Ziele: 
            <li>Menschen dazu zu motivieren, sich intensiver mit den konkreten Inhalten der Wahlprogramme 
            auseinanderzusetzen.</li>
            <li>Menschen für KI zu begeistern und sie selbst dazu zu animieren, KI zu nutzen und kritisch zu hinterfragen.</li>
          </p>



          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <p className="font-medium text-gray-900 mb-4">
              KI und Politik
            </p>
            <ul className="list-disc list-inside space-y-2">
            <p>
            Ich möchte Dich dazu einladen, Dich mit Deinem Einfluss auf unsere gesellschaftliche 
            Zukunft zu befassen. Deine Stimme bei der Wahl und Deine politische Beteiligung im Allgemeinen 
            sind wichtige Instrumente, um unsere Zukunft aktiv mitzugestalten.
          </p>
          <p>
            Wahlprogramme sind die offiziellen Angebote, die politische Parteien uns Bürgerinnen und Bürgern zur Wahl machen.
            Sie sind zwar nicht rechtlich bindend, doch geben einen guten Einblick in das, was die Parteien nach der Wahl anstreben.
            Leider sind sie ziemlich komplex und lang: Allein um die Programme der fünf größten Parteien zu lesen bräuchte
            man etwa zehn Stunden am Stück - das macht wirklich niemand.
          </p>
          <p>
            Das Projekt bundestagswahl.ai versucht, Wahlprogramme in ihrer Komplexität zu reduzieren und zugänglich zu machen.
            Es ist ein Experiment, inwiefern uns Technologie beim Verstehen von komplexen Inhalten helfen kann.
          </p>
          <p>
            Darüber hinaus soll das Projekt die Möglichkeiten von KI zeigen und Lust dazu machen, selbst mehr mit KI zu experimentieren.
            Du kannst die hier dargestellten "Zukunftsvisionen" zum Beispiel ganz leicht nachbauen. Schau gerne
            in der FAQ-Section nach der Methodik und probiere sie selbst aus!
          </p>
            </ul>
          </div>

          <Exhibition />
        </div>
      </div>
    </section>
  );
}