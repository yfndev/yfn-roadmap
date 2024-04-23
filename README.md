# YFN Roadmap

## Beitragen
Jeder soll die Möglichkeit haben, die Roadmap zu verbessern. Wenn du also Verbesserungsvorschläge hast, dann kannst du direkt mitwirken. GitHub ist eine Plattform, die es ermöglicht, dass jeder an Projekten mitarbeiten kann. Wenn du Inhalte hinzufügen oder ändern möchtest, bruchst du zunächst einen GitHub-Account.

### änderungen vornehmen
änderungen können durch 2 Methoden vorgenommen werden:

Dauerhafter Autor werden:
1. Du fragst das YFN Team, ob sie dich als Editor dem Projekt hinzufügen.
2. Du erstellst eine neue Branch.
3. Du bearbeitest/erstellst die Datei.
4. Du erstellt einen Pull Request auf `staging`.
5. Das YFN Team prüft die Änderungen.

Gastbeitrag:
1. Du erstellst eine Fork des Projekts.
2. Du bearbeitest/erstellst die Datei.
3. Du erstellst einen Pull Request auf `staging` in diesem Repo.
4. Das YFN Team prüft die Änderungen.

Wende dich bei Untersützung an das YFN Dev Team, Luis H oder Philipp S.

### Formatierung

Wir verwenden MarkdownX, eine Mischung aus Markdown und React Componenten.

Ließ dir die Dokumentatiion von Docusaurus durch, um zu erfahren, wie du MarkdownX verwendest: [Docusaurus Docs](https://docusaurus.io/docs/markdown-features)

### React Komponenten

#### YouTube

Ein Youtube Video einbetten.
```mdx
import YouTube from '@site/src/components/YouTube';

<YouTube url="https://www.youtube.com/watch?v=UJ6oBCM2GUM"/>
```

#### TwoColumns

Zwei Spalten nebeneinander. Bei kleiner Bildschirmgröße werden die Spalten untereinander angezeigt.
Werden mehr als 2 Elemente eingefügt gehen diese in die nächste Zeile.

```mdx
import TwoColumns from '@site/src/components/TwoColumns';
<TwoColumns>
    <YouTube url="https://www.youtube.com/watch?v=UJ6oBCM2GUM"/>
    <YouTube url="https://www.youtube.com/watch?v=UJ6oBCM2GUM"/>
</TwoColumns>
```

Bei Markdown content sollte dieser nochmals in einem `<div>` gewrappt werden.

```mdx
<TwoColumns>
    <div>
        # Linke Spalte
        Linker Content
    </div>
    <div>
        # Rechte Spalte
        Rechter Content
    </div>
</TwoColumns>
```

### Lokal starten
```bash
npm install
npm run start
```
