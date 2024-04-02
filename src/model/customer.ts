export interface Customer {
    id: number;
    companyName: string;
    address: string;
    city: string;
    state: string;
    zipcode: number;
    phone: string;
    fax: string;
}

export const customers: Customer[] = [{
    id: 1,
    companyName: 'Super Mart of the West',
    address: '702 SW 8th Street',
    city: 'Bentonville',
    state: 'Arkansas',
    zipcode: 72716,
    phone: '(800) 555-2797',
    fax: '(800) 555-2171',
}, {
    id: 2,
    companyName: 'Electronics Depot',
    address: '2455 Paces Ferry Road NW',
    city: 'Atlanta',
    state: 'Georgia',
    zipcode: 30339,
    phone: '(800) 595-3232',
    fax: '(800) 595-3231',
}, {
    id: 3,
    companyName: 'K&S Music',
    address: '1000 Nicllet Mall',
    city: 'Minneapolis',
    state: 'Minnesota',
    zipcode: 55403,
    phone: '(612) 304-6073',
    fax: '(612) 304-6074',
}, {
    id: 4,
    companyName: "Tom's Club",
    address: '999 Lake Drive',
    city: 'Minneapolis',
    state: 'Minnesota',
    zipcode: 98027,
    phone: '(800) 955-2292',
    fax: '(800) 955-2293',
}, {
    id: 5,
    companyName: 'E-Mart',
    address: '3333 Beverly Rd',
    city: 'Atlanta',
    state: 'Georgia',
    zipcode: 60179,
    phone: '(847) 286-2500',
    fax: '(847) 286-2501',
}, {
    id: 6,
    companyName: 'Walters',
    address: '200 Wilmot Rd',
    city: 'Atlanta',
    state: 'Georgia',
    zipcode: 60015,
    phone: '(847) 940-2500',
    fax: '(847) 940-2501',
}, {
    id: 7,
    companyName: 'StereoShack',
    address: '400 Commerce S',
    city: 'Bentonville',
    state: 'Arkansas',
    zipcode: 76102,
    phone: '(817) 820-0741',
    fax: '(817) 820-0742',
}, {
    id: 8,
    companyName: 'Circuit Town',
    address: '2200 Kensington Court',
    city: 'Atlanta',
    state: 'Georgia',
    zipcode: 60523,
    phone: '(800) 955-2929',
    fax: '(800) 955-9392',
}, {
    id: 9,
    companyName: 'Premier Buy',
    address: '7601 Penn Avenue South',
    city: 'Richfield',
    state: 'Minnesota',
    zipcode: 55423,
    phone: '(612) 291-1000',
    fax: '(612) 291-2001',
}, {
    id: 10,
    companyName: 'ElectrixMax',
    address: '263 Shuman Blvd',
    city: 'Atlanta',
    state: 'Georgia',
    zipcode: 60563,
    phone: '(630) 438-7800',
    fax: '(630) 438-7801',
}, {
    id: 11,
    companyName: 'Video Emporium',
    address: '1201 Elm Street',
    city: 'Bentonville',
    state: 'Arkansas',
    zipcode: 75270,
    phone: '(214) 854-3000',
    fax: '(214) 854-3001',
}];