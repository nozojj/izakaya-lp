import ReservationForm from "@/components/ReservationForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <Button>
        <Link href="/">←　トップへ戻る</Link>
        </Button>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6 text-center">
            <p className="text-sm text-green-700">Reservation</p>
            <h1 className="text-2xl font-bold">ご予約</h1>
            <p className="mt-2 text-sm text-gray-600">
              ご希望の日時と人数を入力してください。
            </p>
          </div>

          <ReservationForm />
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          ※　予約は確定ではありません。店舗からの連絡後に確定となります。
        </p>
      </div>
    </main>
  );
}
