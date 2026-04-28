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

    // ===== バリデーション =====
    if (!form.name.trim()) {
      newErrors.name = "名前を入力してください";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "電話番号を入力してください";
    } else if (!/^0\d{9,10}$/.test(form.phone)) {
      newErrors.phone = "電話番号はハイフンなしで入力してください";
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "メール形式が正しくありません";
    }

    if (!form.date) {
      newErrors.date = "日付を選択してください";
    }

    if (!form.time) {
      newErrors.time = "時間を選択してください";
    }

    setErrors(newErrors);

    // エラーが1つでもあれば送信しない
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
        body: JSON.stringify(form),
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
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6">

      {/* 名前 */}
      <div>
        <Label htmlFor="name">名前</Label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      {/* 電話 */}
      <div>
        <Label htmlFor="phone">電話番号</Label>
        <Input
          id="phone"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone}</p>
        )}
      </div>

      {/* メール */}
      <div>
        <Label htmlFor="email">メール</Label>
        <Input
          id="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      {/* 人数 */}
      <div>
        <Label htmlFor="people">人数</Label>
        <Select
          value={String(form.people)}
          onValueChange={(v) =>
            setForm({ ...form, people: Number(v) })
          }
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

      {/* 日付 */}
      <div>
        <Label htmlFor="date">日付</Label>
        <Input
          id="date"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />
        {errors.date && (
          <p className="text-red-500 text-sm">{errors.date}</p>
        )}
      </div>

      {/* 時間 */}
      <div>
        <Label htmlFor="time">時間</Label>
        <Input
          id="time"
          type="time"
          value={form.time}
          onChange={(e) =>
            setForm({ ...form, time: e.target.value })
          }
        />
        {errors.time && (
          <p className="text-red-500 text-sm">{errors.time}</p>
        )}
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "送信中..." : "予約する"}
      </Button>
    </form>
  );
}
