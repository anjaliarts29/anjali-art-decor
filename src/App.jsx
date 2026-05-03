import React from "react";
import { motion } from "framer-motion";
import { Flower2, Brush, Sparkles, Palette, Star, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MandalaArtsWebsite() {
  return (
    <div className="min-h-screen bg-[#fffaf3] text-stone-900">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Art Classes, Handmade Decor & Creative Event Styling
        </h1>
        <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto">
          Mandala Art, Painting, Lippan Art & Birthday / Graduation Decorations in Frisco, Dallas, Plano & McKinney.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-orange-700 hover:bg-orange-800 rounded-full px-6 py-5">
            Book Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full px-6 py-5">
            View Services
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Flower2 className="mx-auto h-8 w-8 text-orange-700" />
            <h3 className="mt-4 font-bold text-xl">Art + Decoration Combined</h3>
            <p className="mt-2 text-stone-600">Unique mix of creative art teaching and handmade event decoration.</p>
          </div>
          <div>
            <Brush className="mx-auto h-8 w-8 text-orange-700" />
            <h3 className="mt-4 font-bold text-xl">Beginner Friendly</h3>
            <p className="mt-2 text-stone-600">Step-by-step guidance for kids, adults, and hobby learners.</p>
          </div>
          <div>
            <Sparkles className="mx-auto h-8 w-8 text-orange-700" />
            <h3 className="mt-4 font-bold text-xl">Handmade Themes</h3>
            <p className="mt-2 text-stone-600">Mandala & Lippan-based decoration themes not available elsewhere.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {[
            "Mandala Art",
            "Painting Classes",
            "Lippan Art",
            "Event Decoration"
          ].map((item) => (
            <Card key={item} className="rounded-2xl">
              <CardContent className="p-6 text-center">
                <Palette className="mx-auto h-6 w-6 text-orange-700" />
                <p className="mt-4 font-bold">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Event Packages</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {title:"Basic",desc:"Home birthday setup (1-10 guests)",price:"$150+"},
              {title:"Premium",desc:"Theme decor + name board",price:"$300+"},
              {title:"Custom",desc:"Mandala / Lippan artistic decor",price:"Custom"}
            ].map(p => (
              <Card key={p.title}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  <p className="text-orange-700 mt-2">{p.price}</p>
                  <p className="mt-3 text-sm text-stone-600">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">Trusted by Families</h2>
          <p className="mt-6 text-stone-600">
            "Amazing decoration and art classes. Unique concepts and very professional work!"
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-orange-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Book Your Class or Event</h2>
        <p className="mt-4">Serving Frisco, Dallas, Plano & McKinney</p>
        <div className="mt-6 space-y-2">
          <p><Phone className="inline mr-2" /> +1 (000) 000-0000</p>
          <p><Mail className="inline mr-2" /> hello@mandalaartsstudio.com</p>
        </div>
        <Button className="mt-6 bg-white text-orange-700 rounded-full px-6 py-5">
          WhatsApp Now
        </Button>
      </section>

    </div>
  );
}
