import jsPDF from "jspdf";

const COMPANY = {
  name: "Resorts Reservation",
  address: "650, 30200 Naivasha Road",
  city: "Nairobi 00100, Kenya",
};

const formatDate = (date) => new Date(date).toLocaleString("en-US");

// Builds and triggers a browser download of a simple, clean invoice PDF for
// a booking. Runs entirely client-side (jsPDF draws directly to a canvas/PDF
// document -- no server round-trip, no third-party service, no Node built-ins).
const generateInvoicePdf = (booking) => {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const marginX = 48;
  let y = 64;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(COMPANY.name, marginX, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(90);
  y += 18;
  doc.text(COMPANY.address, marginX, y);
  y += 14;
  doc.text(COMPANY.city, marginX, y);

  doc.setTextColor(20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("INVOICE", 547, 64, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Invoice #: ${booking._id}`, 547, 82, { align: "right" });
  doc.text(`Date: ${formatDate(Date.now())}`, 547, 96, { align: "right" });

  y = 140;
  doc.setDrawColor(225);
  doc.line(marginX, y, 547, y);

  y += 28;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Billed to", marginX, y);
  doc.setFont("helvetica", "normal");
  y += 16;
  doc.text(booking.user?.name || "", marginX, y);
  y += 14;
  doc.text(booking.user?.email || "", marginX, y);

  y += 34;
  doc.setFont("helvetica", "bold");
  doc.text("Stay details", marginX, y);
  doc.setFont("helvetica", "normal");
  y += 16;
  doc.text(`Check-in: ${formatDate(booking.checkInDate)}`, marginX, y);
  y += 14;
  doc.text(`Check-out: ${formatDate(booking.checkOutDate)}`, marginX, y);
  y += 14;
  doc.text(`Length of stay: ${booking.daysOfStay} day(s)`, marginX, y);

  y += 40;
  doc.setFillColor(243, 239, 232);
  doc.rect(marginX, y, 547 - marginX, 26, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Room", marginX + 10, y + 17);
  doc.text("Nights", 350, y + 17);
  doc.text("Amount", 547 - 10, y + 17, { align: "right" });

  y += 26;
  doc.setFont("helvetica", "normal");
  doc.text(booking.room?.name || "", marginX + 10, y + 18, { maxWidth: 260 });
  doc.text(String(booking.daysOfStay), 350, y + 18);
  doc.text(`Ksh ${booking.amountPaid}`, 547 - 10, y + 18, { align: "right" });

  y += 50;
  doc.setDrawColor(225);
  doc.line(marginX, y, 547, y);

  y += 26;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Total paid", 400, y);
  doc.text(`Ksh ${booking.amountPaid}`, 547, y, { align: "right" });

  y += 50;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(
    "This is an auto-generated invoice for your Resorts Reservation booking.",
    marginX,
    y
  );

  doc.save(`invoice_${booking._id}.pdf`);
};

export default generateInvoicePdf;
