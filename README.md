# YFN Roadmap

Das Young Founders Network ist ein Non-Profit Verein mit einer Community aus 250+ der jüngsten Gründer aus ganz Deutschland.

**Diese Roadmap ist das, was wir gerne gehabt hätten, als wir angefangen haben, unsere Ideen umzusetzen**

- Kompakt, aufs Wesentliche reduziert, aber mit vielen sorgfältig ausgewählten Links, damit du mit den besten Ressourcen deiner Neugierde nachgehen kannst
- Hilfreich, egal, ob du eine App, ein Hardware-Produkt oder etwas anderes aufbauen möchtest
- Unser Wiki hat eine klare Meinung. Wir geben dir keinen Überblick über Tools, wir sagen, welches wir am besten finden, damit du so schnell wie möglich anfangen kannst.
- In Zusammenarbeit mit der Bertelsmann Stiftung

## COMMUNTIY

Du willst kostenlos Teil der Community werden, um an unseren halbjährlichen Events teilzunehmen und auf unserer
Community Plattform von anderen Mitgliedern Unterstützung zu bekommen? [Hier](https://youngfounders.network/become-member) kannst du dich dafür bewerben.

## Beitragen

Jeder soll die Möglichkeit haben, die Roadmap zu verbessern. Wenn du also Verbesserungsvorschläge hast, dann kannst du direkt mitwirken. GitHub ist eine Plattform, die es ermöglicht, dass jeder an Projekten mitarbeiten kann. Wenn du Inhalte hinzufügen oder ändern möchtest, bruchst du zunächst einen GitHub-Account.

### änderungen vornehmen

änderungen können durch 2 Methoden vorgenommen werden:

Dauerhafter Autor werden:

1. Du fragst das YFN Team, ob sie dich als Editor dem Projekt hinzufügen.
2. Du erstellst eine neue Branch.
3. Du bearbeitest/erstellst die Datei.
4. Du erstellt eine "Pull Request" auf `staging`.
5. Das YFN Team prüft die Änderungen.

Gastbeitrag:

1. Du erstellst eine Fork des Projekts.
2. Du bearbeitest/erstellst die Datei.
3. Du erstellst einen "Pull Request" auf `staging` in diesem Repo.
4. Das YFN Team prüft die Änderungen.

Wende dich bei Untersützung an das YFN Dev Team (Luis oder Philipp).

### Formatierung

Wir verwenden MarkdownX, eine Mischung aus Markdown und React Componenten.

Ließ dir die Dokumentatiion von Docusaurus durch, um zu erfahren, wie du MarkdownX verwendest: [Docusaurus Docs](https://docusaurus.io/docs/markdown-features)

### React Komponenten

#### YouTube

Ein Youtube Video einbetten.

```mdx
<YouTube url="https://www.youtube.com/watch?v=UJ6oBCM2GUM" />
```

#### TwoColumns

Zwei Spalten nebeneinander. Bei kleiner Bildschirmgröße werden die Spalten untereinander angezeigt.
Werden mehr als 2 Elemente eingefügt gehen diese in die nächste Zeile.

```mdx
<TwoColumns>
    <YouTube url="https://www.youtube.com/watch?v=UJ6oBCM2GUM"/>
    <YouTube url="https://www.youtube.com/watch?v=UJ6oBCM2GUM"/>
</TwoColumns

>
```

Bei Markdown content sollte dieser nochmals in einem `<div>` gewrappt werden.

```mdx
<TwoColumns>
  <div># Linke Spalte Linker Content</div>
  <div># Rechte Spalte Rechter Content</div>
</TwoColumns>
```

### Button

```mdx
<Button>Bitte hier clicken</Button>
```

### Image Float

```mdx
<ImageFloat source="IMAGE SOURCE" text="Das hier ist eine Beschreibung">
  Das hier ist ein Text
</ImageFloat>
```

### Spotify

```mdx
<Spotify source="Spotify Podcast Link" />
```

### TikTok

```mdx
<TikTok source="TikTok Link" />
```

### Tooltipp

```mdx
<Tooltipp
  toolName="Figma"
  toolDescription="Figma ist ein cooles Tool"
  toolSource="https://www.figma.com/de/"
  tutorialSource="https://www.youtube.com/Tutorial"
  buttonText="Zu Figma"
/>
```

### Brauchst du mehr Platz?

```mdx
<Spacer />
```

### Lokal starten

```bash
npm install
npm run start
```
