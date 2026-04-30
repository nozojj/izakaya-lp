"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

export default function ReservationForm() {
  const router = useRouter();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const timeOptions = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    people: 2,
    date: "",
    time: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
    };

    const cleanedPhone = form.phone.replace(/-/g, "");

    if (!form.name.trim()) {
      newErrors.name = "名前を入力してください";
    }

    if (!cleanedPhone) {
      newErrors.phone = "電話番号を入力してください";
    } else if (!/^0\d{9,10}$/.test(cleanedPhone)) {
      newErrors.phone = "正しい電話番号を入力してください";
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "メール形式が正しくありません";
    }

    if (!form.date) {
      newErrors.date = "日付を選択してください";
    } else if (form.date < minDate) {
      newErrors.date = "予約日は明日以降を選択してください";
    }

    if (!form.time) {
      newErrors.time = "時間を選択してください";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((e) => e !== "")) {
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          phone: cleanedPhone,
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success("予約リクエストを受け付けました");
      router.push("/thanks");
    } catch {
      toast.error("送信に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
    >
      <div>
        <Label htmlFor="name">名前</Label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="phone">電話番号</Label>
        <Input
          id="phone"
          inputMode="tel"
          placeholder="090-1234-5678"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div>
        <Label htmlFor="email">メール</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@mail.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="people">人数</Label>
        <Select
          value={String(form.people)}
          onValueChange={(v) => setForm({ ...form, people: Number(v) })}
        >
          <SelectTrigger id="people">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[...Array(10)].map((_, i) => (
              <SelectItem key={i} value={String(i + 1)}>
                {i + 1}人
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="date">日付</Label>
        <Input
          id="date"
          type="date"
          min={minDate}
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      <div>
        <Label htmlFor="time">時間</Label>
        <Select
          value={form.time}
          onValueChange={(v) => setForm({ ...form, time: v })}
        >
          <SelectTrigger id="time">
            <SelectValue placeholder="時間を選択してください" />
          </SelectTrigger>

          <SelectContent>
            {timeOptions.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "送信中..." : "予約する"}
      </Button>
    </form>
  );
}
