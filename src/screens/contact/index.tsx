// ;
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <ul className="social-links">
        <li className="Facebook">
          <Link href="https://www.facebook.com/TmT.Ls">Facebook</Link>
        </li>
        <li className="Instagram">
          <Link href="https://www.instagram.com/mnhtn_iie__">Instagram</Link>
        </li>
        <li className="Youtube">
          <Link href="https://www.youtube.com/@hgtn3581">YouTube</Link>
        </li>
        <li className="gmail">
                    Mail to:{" "}
          <Link href="https://mail.google.com/mail/#inbox?compose=new&view=cm&fs=1&to=minhtienuetls@gmail.com">
            minhtienuetls@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
