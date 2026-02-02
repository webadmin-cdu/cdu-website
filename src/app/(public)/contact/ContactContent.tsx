'use client';

import { Phone, Envelope, MapPin, Clock } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export function ContactContent() {
  return (
    <>
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <SectionTitle
                  subtitle="Get in Touch"
                  title="Contact Information"
                  align="left"
                />
              </div>

              {/* Phone Numbers */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-600 mb-2">Phone</h3>
                      <p className="text-neutral-600 text-sm mb-1">
                        Reception: {SITE_CONFIG.contact.phones.reception}
                      </p>
                      <p className="text-neutral-600 text-sm mb-1">
                        Admissions: {SITE_CONFIG.contact.phones.admissions}
                      </p>
                      <p className="text-neutral-600 text-sm">
                        International: {SITE_CONFIG.contact.phones.international}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Envelope className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-600 mb-2">Email</h3>
                      <p className="text-neutral-600 text-sm">
                        {SITE_CONFIG.contact.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              {SITE_CONFIG.contact.addresses.map((addr) => (
                <Card key={addr.campus} variant="bordered">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-600 mb-2">
                          {addr.campus}
                        </h3>
                        <p className="text-neutral-600 text-sm">{addr.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Office Hours */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-600 mb-2">
                        Office Hours
                      </h3>
                      <p className="text-neutral-600 text-sm mb-1">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-neutral-600 text-sm">
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="bordered">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary-600 mb-6">
                    Send us a Message
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Find Us"
            title="Location"
          />
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3481037583824!2d78.48373147559686!3d17.385044183516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chaitanya University Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
