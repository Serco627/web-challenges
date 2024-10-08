import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  const handleAddTag = (newTag) => {
    setTags([newTag, ...tags]);
  };

  const handleDelete = (tagToDelete) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tagToDelete;
      })
    );
  };

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDelete} />
    </main>
  );
}
