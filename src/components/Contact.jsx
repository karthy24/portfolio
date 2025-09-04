import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { profile } from "../data_profile"

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
      <div className="glass p-6 grid sm:grid-cols-2 gap-6">
        
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-violet-400" />
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-violet-400" />
          <a href={`tel:${profile.phone}`} className="hover:underline">
            {profile.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-violet-400" />
          <span>{profile.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-violet-400" />
          <a href={profile.linkedin} target="_blank" className="hover:underline">
            {profile.linkedin}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-violet-400" />
          <a href="https://github.com/karthy24" target="_blank" className="hover:underline">
            github.com/karthy24
          </a>
        </div>

      </div>
    </section>
  )
}
