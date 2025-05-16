export const metadata = {
  title: "Privacy Policy - BollyGroove",
  description: "Read the Privacy Policy for BollyGroove.",
};

export default function PrivacyPage() {
  return (
    <>
      <head>
        <title>Privacy and Cookies | BollyGroove</title>
        <meta
          name="description"
          content="Read BollyGroove's privacy policy and cookie usage information."
        />
      </head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Privacy Policy
        </h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6 prose lg:prose-xl">
          <p>
            <em>Last Updated: {new Date().toLocaleDateString()}</em>
          </p>
          <p>
            Welcome to BollyGroove! This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website and use our services. Please read this privacy policy
            carefully. If you do not agree with the terms of this privacy
            policy, please do not access the site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, shipping address, email address,
              and telephone number, and demographic information, such as your
              age, gender, hometown, and interests, that you voluntarily give to
              us when you register with the Site or when you choose to
              participate in various activities related to the Site, such as
              online chat and message boards.
            </li>
            <br />
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Site, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have viewed directly before and after
              accessing the Site.
            </li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>
              Fulfill and manage purchases, orders, payments, and other
              transactions related to the Site.
            </li>
            <li>Improve the efficiency and operation of the Site.</li>
            {/* Add more uses as appropriate */}
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
            {/* Add disclosure details */}
          </p>
          <p>
            More content to be added here regarding data sharing, third-party
            websites, security of your information, policy for children,
            controls for do-not-track features, and contact information.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at our contact email address or via the contact form on
            our website.
          </p>
        </div>
      </div>
    </>
  );
}
