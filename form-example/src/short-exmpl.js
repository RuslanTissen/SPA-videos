import { useState } from "react";

export default function App() {
  const [form, setForm] = useState(
    {   name: "", 
        email: "", 
        city: "" });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form>
      <input name="name"  
        value={form.name}  
        onChange={handleChange} 
        placeholder="Имя" />
      <input name="email" 
        value={form.email} 
        onChange={handleChange} 
        placeholder="Email" />
      <input name="city"  
        value={form.city}  
        onChange={handleChange} 
        placeholder="Город" />
    </form>
  );
}
