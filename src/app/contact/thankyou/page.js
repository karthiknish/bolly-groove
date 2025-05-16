export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary px-4 py-20">
      <div className="bg-white rounded-xl shadow-xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold accent-primary mb-4">Thank You</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your message has been received. We appreciate your interest in
          BollyGroove and will get back to you as soon as possible.
        </p>
        <a
          href="/"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-bold hover:bg-secondary hover:text-primary transition-all duration-200"
        >
          Back to Home
        </a>
        <a
          href="/events"
          className="inline-block ml-4 border border-primary text-primary px-6 py-3 rounded font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          View Events
        </a>
      </div>
    </div>
  );
}
