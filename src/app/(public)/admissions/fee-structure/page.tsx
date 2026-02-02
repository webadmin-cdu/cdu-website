import { PageHeader } from '@/components/shared/PageHeader';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const metadata = {
  title: 'Fee Structure',
  description:
    'Detailed fee structure for all programs at Chaitanya University.',
};

const feeStructure = {
  undergraduate: [
    { program: 'B.Tech (All Branches)', tuition: '1,20,000', total: '1,50,000' },
    { program: 'B.Pharm', tuition: '1,00,000', total: '1,25,000' },
    { program: 'Pharm.D', tuition: '1,50,000', total: '1,80,000' },
    { program: 'BBA', tuition: '80,000', total: '1,00,000' },
  ],
  postgraduate: [
    { program: 'M.Tech (All Specializations)', tuition: '90,000', total: '1,15,000' },
    { program: 'M.Pharm (All Specializations)', tuition: '1,00,000', total: '1,25,000' },
    { program: 'MBA', tuition: '1,50,000', total: '1,80,000' },
    { program: 'MBA (Executive)', tuition: '2,00,000', total: '2,25,000' },
  ],
  doctoral: [
    { program: 'Ph.D (All Disciplines)', tuition: '75,000', total: '1,00,000' },
  ],
};

const additionalFees = [
  { item: 'Admission Fee (One-time)', amount: '10,000' },
  { item: 'Caution Deposit (Refundable)', amount: '5,000' },
  { item: 'Examination Fee (Per Semester)', amount: '5,000' },
  { item: 'Library Fee (Per Year)', amount: '3,000' },
  { item: 'Laboratory Fee (Per Year)', amount: '5,000' },
  { item: 'Sports & Cultural Fee (Per Year)', amount: '2,000' },
];

const hostelFees = [
  { type: 'Boys Hostel - Single Occupancy', fee: '1,20,000' },
  { type: 'Boys Hostel - Double Occupancy', fee: '80,000' },
  { type: 'Girls Hostel - Single Occupancy', fee: '1,30,000' },
  { type: 'Girls Hostel - Double Occupancy', fee: '90,000' },
];

function FeeTable({ data }: { data: typeof feeStructure.undergraduate }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-neutral-200">
            <th className="py-4 px-4 font-semibold text-neutral-700">Program</th>
            <th className="py-4 px-4 font-semibold text-neutral-700 text-right">
              Tuition Fee
            </th>
            <th className="py-4 px-4 font-semibold text-neutral-700 text-right">
              Total (Approx.)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.program} className="border-b border-neutral-100">
              <td className="py-4 px-4 text-neutral-600">{item.program}</td>
              <td className="py-4 px-4 text-right text-neutral-600">
                ₹{item.tuition}
              </td>
              <td className="py-4 px-4 text-right font-medium text-primary-600">
                ₹{item.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FeeStructurePage() {
  return (
    <>
      <PageHeader
        title="Fee Structure"
        description="Transparent fee structure for all programs at Chaitanya University."
      />

      {/* Fee Structure Tables */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Annual Fees"
            title="Program-wise Fee Structure"
            description="All fees are per academic year in Indian Rupees (INR)."
          />

          <div className="space-y-8">
            {/* Undergraduate */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <Badge variant="primary" className="mb-4">
                  Undergraduate Programs
                </Badge>
                <FeeTable data={feeStructure.undergraduate} />
              </CardContent>
            </Card>

            {/* Postgraduate */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <Badge variant="primary" className="mb-4">
                  Postgraduate Programs
                </Badge>
                <FeeTable data={feeStructure.postgraduate} />
              </CardContent>
            </Card>

            {/* Doctoral */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <Badge variant="primary" className="mb-4">
                  Doctoral Programs
                </Badge>
                <FeeTable data={feeStructure.doctoral} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Other Fees */}
            <div>
              <SectionTitle
                subtitle="Other Charges"
                title="Additional Fees"
                align="left"
              />
              <Card variant="bordered">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {additionalFees.map((item) => (
                      <li
                        key={item.item}
                        className="flex justify-between py-2 border-b border-neutral-100 last:border-0"
                      >
                        <span className="text-neutral-600">{item.item}</span>
                        <span className="font-medium text-primary-600">
                          ₹{item.amount}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Hostel Fees */}
            <div>
              <SectionTitle
                subtitle="Accommodation"
                title="Hostel Fees"
                align="left"
              />
              <Card variant="bordered">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {hostelFees.map((item) => (
                      <li
                        key={item.type}
                        className="flex justify-between py-2 border-b border-neutral-100 last:border-0"
                      >
                        <span className="text-neutral-600">{item.type}</span>
                        <span className="font-medium text-primary-600">
                          ₹{item.fee}/year
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Payment Options"
            title="How to Pay"
          />

          <div className="max-w-3xl mx-auto">
            <Card variant="bordered">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-2">
                      Online Payment
                    </h3>
                    <p className="text-neutral-600">
                      Pay securely through our online portal using Credit/Debit
                      Card, Net Banking, or UPI.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-2">
                      Bank Transfer
                    </h3>
                    <p className="text-neutral-600">
                      Transfer fees directly to the university bank account.
                      Contact the accounts office for details.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-2">
                      Installment Option
                    </h3>
                    <p className="text-neutral-600">
                      Semester-wise payment option available for all programs.
                      Contact admissions for more details.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
