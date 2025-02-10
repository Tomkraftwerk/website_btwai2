const events = [
  {
    title: "Tübingen – Innovationszentrum Westspitze",
    date: "5. Februar 2025",
    link: "https://www.coworkgroup.de/events/ki-und-wir"
  },
  {
    title: "Essen – Unperfekthaus",
    date: "8. Februar 2025",
    link: "https://www.uph.de/veranstaltungskalender"
  },
  {
    title: "Berlin – Telefónica Basecamp",
    date: "10. Februar 2025",
    link: "https://www.basecamp.digital/event/basecamp-fishbowl-hey-ai-wen-soll-ich-waehlen/"
  },
  {
    title: "Zwickau – Alter Gasometer",
    date: "11. Februar 2025",
    link: "https://www.alter-gasometer.de/veranstaltung/ki-trifft-politik-ausstellung-und-diskussion/",
  },
    {
    title: "Bernau – Galerie Bernau",
    date: "15. Februar 2025",
    link: "https://www.bernau.de/de/rathaus-service/aktuelles/stadtnachrichten/artikel-ki-ausstellung-zur-bundestagswahl-wahlprogramme-in-bildern.html",
  },
];

function Events() {
  return (
    <section id="events" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Veranstaltungen</h2>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white border border-gray-300 p-6 rounded-xl shadow-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-700"><strong>Datum:</strong> {event.date}</p>
            </div>
            {event.link ? (
              <a href={event.link} target="_blank" rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                Mehr Infos
              </a>
            ) : (
              <p className="text-gray-500">Infos folgen...</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
