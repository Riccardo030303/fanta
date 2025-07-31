import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsData = [
  {
    id: 1,
    title: "Colpo grosso per FC Scarsenal!",
    content: "Acquisto clamoroso: arriva Immobile in prestito con obbligo!",
    date: "2025-07-29",
  },
  {
    id: 2,
    title: "Mercato pazzo per Real Madoninna",
    content: "Scambio alla pari tra Osimhen e Zirkzee. Chi ci guadagna?",
    date: "2025-07-28",
  },
];

const USER_PASSWORD = "GAY";
const ADMIN_PASSWORD = "Erica";

export default function BastionApp() {
  const [tab, setTab] = useState("news");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('/mnt/data/Gemini_Generated_Image_wvf34zwvf34zwvf3.png')" }}>
        <Card className="bg-black/70 p-6 w-full max-w-sm">
          <CardContent className="space-y-4">
            <h2 className="text-center text-2xl font-bold">Accesso BASTION</h2>
            <Input type="password" placeholder="Inserisci la password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-black" />
            <Button onClick={() => {
              if (password === USER_PASSWORD) {
                setLoggedIn(true);
              } else if (password === ADMIN_PASSWORD) {
                setIsAdmin(true);
                setLoggedIn(true);
              }
            }} className="w-full">
              Entra
            </Button>
            {password && password !== USER_PASSWORD && (
              <p className="text-red-500 text-sm">Password errata</p>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cover bg-center text-white p-4" style={{ backgroundImage: "url('/mnt/data/Gemini_Generated_Image_wvf34zwvf34zwvf3.png')" }}>
      <header className="text-center text-3xl font-bold mb-4 bg-black/50 py-2 rounded-xl">BASTION</header>
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="flex justify-center gap-2 mb-4 bg-black/50 rounded-xl">
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="classifica">Classifica</TabsTrigger>
          <TabsTrigger value="squadre">Squadre</TabsTrigger>
          <TabsTrigger value="statistiche">Statistiche</TabsTrigger>
          <TabsTrigger value="halloffame">Hall of Fame</TabsTrigger>
          <TabsTrigger value="mercato">Mercato</TabsTrigger>
        </TabsList>

        <TabsContent value="news">
          <div className="space-y-4">
            {newsData.map((news) => (
              <Card key={news.id} className="bg-white/80 text-black">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">{news.title}</h3>
                  <p className="text-sm text-gray-600">{news.date}</p>
                  <p className="mt-2">{news.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="classifica">
          <Card className="bg-white/80 text-black">
            <CardContent className="p-4">
              <p>La classifica sarà presto disponibile.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="squadre">
          <Card className="bg-white/80 text-black">
            <CardContent className="p-4">
              <p>Le rose delle squadre saranno qui visualizzate.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="statistiche">
          <Card className="bg-white/80 text-black">
            <CardContent className="p-4">
              <p>Statistiche giocatori e squadre saranno visibili qui.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="halloffame">
          <Card className="bg-white/80 text-black">
            <CardContent className="p-4">
              <p>Hall of Fame con vincitori delle scorse stagioni.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mercato">
          <Card className="bg-white/80 text-black">
            <CardContent className="p-4">
              <p>Ultime trattative, scambi e rumors dal mercato interno.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {isAdmin && (
        <div className="mt-8 bg-black/50 p-4 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Pannello Admin - Aggiungi News</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const newPost = {
              id: Date.now(),
              title: form.title.value,
              content: form.content.value,
              date: new Date().toISOString().split("T")[0],
            };
            newsData.unshift(newPost);
            form.reset();
            alert("News aggiunta con successo!");
          }} className="space-y-3">
            <Input name="title" placeholder="Titolo della news" required className="text-black" />
            <Input name="content" placeholder="Contenuto" required className="text-black" />
            <Button type="submit">Pubblica</Button>
          </form>
        </div>
      )}
    </div>
  );
}