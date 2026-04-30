import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[#f8f5f0]">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-md p-8 text-center">
        <p className="text-sm text-gray-500">Reservation Request</p>

        <h1 className="text-2xl font-bold mt-2">
          ご予約ありがとうございます
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          予約リクエストを受け付けました。
          <br />
          内容を確認のうえ、店舗よりご連絡いたします。
        </p>

        <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-600 text-left">
          <p>※本サイトはポートフォリオ用の架空店舗です。</p>
          <p>実際の予約は送信されません。</p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-black px-6 py-3 text-white font-semibold hover:opacity-80 transition"
        >
          トップへ戻る
        </Link>
      </div>
    </main>
  );
}