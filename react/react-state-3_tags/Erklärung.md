    Aufgabe 1:
    1.	Benutzer gibt einen Tag ein und klickt auf “Add”.
    2.	handleSubmit wird aufgerufen und sammelt die Formulardaten.
    3.	Die Daten werden in ein Objekt umgewandelt und an onAddTag übergeben.
    4.	handleAddTag fügt das neue Tag dem Zustand hinzu und aktualisiert die Liste der Tags.
    5.	Das Formular wird zurückgesetzt und der Fokus wird auf das Eingabefeld gesetzt.

Auf diese Weise weiß der Form-Komponent, was der Benutzer eingegeben hat, und leitet diese Information an den App-Komponent weiter, der den Zustand entsprechend aktualisiert.

Aufgabe 2: 1. Eingangswert:
tagToDelete ist das Tag, das gelöscht werden soll. 2. Filter-Methode:
tags.filter((tag) => tag !== tagToDelete) erstellt ein neues Array, das alle Tags enthält, außer dem, das gelöscht werden soll. 3. Zustandsaktualisierung:
setTags wird mit dem neuen Array aufgerufen, wodurch der Zustand (state) aktualisiert wird. 4. Neurendering:
Die Benutzeroberfläche wird automatisch aktualisiert, um das gelöschte Tag nicht mehr anzuzeigen.

Zusammengefasst: Die Funktion entfernt ein Tag aus der Liste und aktualisiert den Zustand, um die Änderung widerzuspiegeln.

Die Funktion handleDeleteTag löscht das angeklickte Tag nicht direkt, sondern erstellt ein neues Array, das alle Tags enthält, außer dem Tag, das gelöscht werden soll.

Code Details:

    •	tags.filter((tag) => tag !== tagToDelete): Dies erstellt ein neues Array, das alle Tags außer tagToDelete enthält.
    •	setTags(newArray): Der Zustand wird aktualisiert, und die UI wird mit dem neuen Array gerendert, ohne das gelöschte Tag.
