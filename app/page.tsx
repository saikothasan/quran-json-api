import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureShowcase } from "@/components/feature-showcase"
import { HeroSection } from "@/components/hero-section"

const languages = [
  { name: "Bengali", code: "bn", native: "বাংলা" },
  { name: "Chinese", code: "zh", native: "中文" },
  { name: "English", code: "en", native: "English" },
  { name: "Spanish", code: "es", native: "Español" },
  { name: "French", code: "fr", native: "Français" },
  { name: "Indonesian", code: "id", native: "Indonesia" },
  { name: "Russian", code: "ru", native: "Русский" },
  { name: "Swedish", code: "sv", native: "Svenska" },
  { name: "Turkish", code: "tr", native: "Türkçe" },
  { name: "Urdu", code: "ur", native: "اردو" }
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-24 px-4 sm:px-6 lg:px-8">
      <HeroSection />

      <FeatureShowcase />

      <section className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center text-shadow">Available Languages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {languages.map(({ name, code, native }, index) => (
            <Card key={code} className="group hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in hover-lift" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="p-4">
                <CardTitle className="text-lg">
                  {name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <code className="text-xs px-1 py-0.5 rounded bg-muted">
                    {code}
                  </code>
                  <span>{native}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="animate-fade-in">
        <Card className="border-primary/20 bg-primary/5 overflow-hidden hover-lift">
          <div className="absolute inset-0 bg-primary/5 animate-pulse-slow" />
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Get Started</CardTitle>
            <CardDescription>
              Start using the Quran JSON API in your project with a simple fetch request.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-card p-4 rounded-lg overflow-x-auto relative">
              <div className="absolute inset-0 bg-primary/5 animate-pulse-slow" />
              <code className="text-sm relative z-10">{`fetch('https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran.json')
.then(response => response.json())
.then(data => console.log(data));`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

