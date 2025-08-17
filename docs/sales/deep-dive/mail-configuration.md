# Mail Konfiguration

Eine effektive Mail-Konfiguration ist essenziell für erfolgreichen Cold Outreach, um icherzustellen, dass deine E-Mails den richtigen Empfänger erreichen und nicht im Spam-Ordner landen. In diesem Kapitel schauen wir uns an, wie du die E-Mail-Infrastruktur für den B2B-Vertrieb einrichtest, optimierst und sicherstellst, dass deine E-Mails eine hohe Zustellrate haben.

## Email Setup

### Domain(s) kaufen

Der erste Schritt besteht darin, geeignete Domains zu kaufen, die nicht mit deiner Hauptdomain in Verbindung stehen. Du solltest nicht deine Unternehmensdomain verwenden, um zu vermeiden, dass diese auf einer Spam-Liste landet. Domains kannst du günstig für 2-3 Euro pro Jahr bei Anbietern wie GoDaddy oder Cloudflare erwerben.

Stelle sicher, dass du pro Domain maximal 2-3 E-Mail-Konten einrichtest und nicht mehr als 30-40 E-Mails pro Tag pro Konto sendest, um unter den Radar von Google oder Microsoft zu bleiben und deine Domain nicht zu "verbrennen".

### Emailbox Provider kaufen

Nachdem du die Domains eingerichtet hast, benötigst du einen E-Mail-Hosting-Anbieter. Die besten Optionen sind:

- Google Workspace (ehemals G Suite)
- Microsoft Office365
- Exchange
- Outlook

Diese Anbieter gewährleisten hohe Zustellraten und ermöglichen eine einfache Verwaltung von E-Mail-Konten.

### Mailbox im Sales Outreach Tool verlinken

Tools wie Apollo.io oder Smartlead ermöglichen es dir, deine E-Mail-Konten zu verknüpfen und automatisierte E-Mail-Sequenzen zu erstellen. Sobald die E-Mail-Konten verlinkt sind, kannst du personalisierte Nachrichten, Follow-ups und A/B-Tests durchführen, um die Reaktion der Empfänger zu verbessern.

### E-Mail Signatur vorbereiten

Deine E-Mail-Signatur sollte professionell und klar gestaltet sein, aber nicht zu werblich wirken. Sie sollte deinen Namen, deine Position und den Unternehmensnamen enthalten, sowie einen Link zur Webseite oder deinem LinkedIn-Profil. Füge deine physische Adresse hinzu, um die rechtlichen Anforderungen zu erfüllen.

### Unsubscribe Link konfigurieren

Gemäß den Anforderungen der GDPR und anderer Datenschutzrichtlinien muss ein Abmeldelink in deinen E-Mails enthalten sein. Dies kannst du über Tools wie Apollo.io leicht konfigurieren. Der Abmeldelink gibt den Empfängern die Möglichkeit, sich von weiteren Nachrichten abzumelden, was dein Risiko minimiert, als Spam markiert zu werden.

Weitere Infos findest du in der Apollo-Dokumentation [hier](https://knowledge.apollo.io/hc/en-us/articles/4409140379661-Configure-Your-Unsubscribe-Email-Link).

### Email Sending Limits setzen

Um deine Domain zu schützen und die Wahrscheinlichkeit zu minimieren, dass deine E-Mails im Spam-Ordner landen, solltest du strikte Sendegrenzen festlegen. Versende pro E-Mail-Konto nicht mehr als 35 E-Mails am Tag und erhöhe die Anzahl langsam. Dies kannst du direkt in Tools wie Apollo.io konfigurieren. Mehr zu den E-Mail-Sendelimits findest du [hier](https://knowledge.apollo.io/hc/en-us/articles/4409233349005-Email-Sending-Limits-Overview).

## Email Deliverability & Domain Reputation

### Metriken zur Überwachung der Deliverability

Um sicherzustellen, dass deine E-Mails ankommen und gelesen werden, solltest du die folgenden Metriken überwachen:

- **Bounce Rate**: Gibt an, wie viele E-Mails nicht zugestellt werden konnten. Eine hohe Bounce-Rate signalisiert Probleme mit der E-Mail-Liste oder deiner Domain-Reputation.
- **Open Rate**: Diese Metrik zeigt, wie viele Empfänger deine E-Mail geöffnet haben. Niedrige Öffnungsraten könnten auf Probleme mit der Betreffzeile oder Zustellbarkeit hindeuten.
- **Click Rate**: Diese Rate zeigt an, wie viele Empfänger auf einen Link in deiner E-Mail geklickt haben.
- **Reply Rate**: Die Antwortrate misst den Erfolg deiner Outreach-Kampagne in Bezug auf das Engagement.
- **Unsubscribe Rate**: Eine hohe Abmelderate deutet darauf hin, dass dein Inhalt oder deine Frequenz für die Empfänger zu aufdringlich ist.

### Wie du SPAM-Filter vermeidest

Um Spam-Filter zu umgehen, ist es wichtig, deine Domain und E-Mail-Infrastruktur korrekt zu konfigurieren. Drei wesentliche Authentifizierungsprotokolle, die eingerichtet werden müssen, sind:

- **SPF (Sender Policy Framework)**: Dieses Protokoll hilft zu überprüfen, ob deine E-Mails von autorisierten Servern stammen. Der SPF-Eintrag wird in den DNS-Einstellungen der Domain hinterlegt und legt fest, welche Server E-Mails für diese Domain versenden dürfen.

  > Beispiel-Eintrag: v=spf1 include:\_spf.google.com ~all

- **DKIM (DomainKeys Identified Mail)**: DKIM fügt eine digitale Signatur zu deinen E-Mails hinzu, um deren Authentizität zu bestätigen. Dies schützt deine E-Mails vor Manipulationen während der Übertragung.

  > Beispiel-Eintrag: v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...

- **DMARC (Domain-based Message Authentication, Reporting & Conformance)**: Dieses Protokoll baut auf SPF und DKIM auf und gibt dem Empfänger an, was zu tun ist, wenn eine E-Mail diese Authentifizierungen nicht besteht (z. B. in den Spam-Ordner verschieben oder ablehnen).
  > Beispiel-Eintrag: v=DMARC1; p=reject; rua=mailto:dmarcreports@example.com

### Email Content verbessern

Um Spam-Filter zu umgehen, sollte der Inhalt deiner E-Mails ebenfalls optimiert sein:

- **Vermeide Spam-Wörter**: Begriffe wie „kostenlos“, „jetzt kaufen“ oder „nur für kurze Zeit“ triggern Spam-Filter. Nutze Tools wie Hemingway, um deinen Text auf potenzielle Spam-Wörter zu überprüfen.
- **Keine übermäßige Formatierung**: Vermeide es, viele Farben, Fettschrift oder zu viele Links zu verwenden, da diese oft als Spam klassifiziert werden. Halte das Design einfach und nutze eine klare, sachliche Sprache.

Weitere Tipps zur Vermeidung von Spam-Filtern findest du [hier](https://knowledge.apollo.io/hc/en-us/articles/4409225311885-Avoid-Spam-Filters#toc_7).
