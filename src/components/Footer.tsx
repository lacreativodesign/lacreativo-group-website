import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-foreground-muted md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">
              LA CREATIVO GROUP, LLC
            </p>
            <p>
              Governance-led stewardship supporting responsible, long-term value
              creation across our portfolio.
            </p>
          </div>
          <div className="text-sm">
            <p>Administrative inquiries only.</p>
            <p>info@lacreativogroup.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
