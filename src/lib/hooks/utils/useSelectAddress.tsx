'use client';

import { useEffect, useState } from 'react';

import barangays from '@/public/address/barangay.json';
import cities from '@/public/address/city.json';
import provinces from '@/public/address/province.json';
import regions from '@/public/address/region.json';

export type RegionType = {
  id: number;
  psgc_code: string;
  region_name: string;
  region_code: string;
};
export type ProvinceType = {
  psgc_code: string;
  province_name: string;
  province_code: string;
  region_code: string;
};
export type CityType = {
  city_name: string;
  city_code: string;
  province_code: string;
  region_code: string;
};
export type BarangayType = {
  brgy_name: string;
  brgy_code: string;
  province_code: string;
  region_code: string;
  city_code: string;
};

export default function useSelectAddress() {
  const [regionList, setRegionList] = useState<RegionType[]>([]);
  const [provinceList, setProvinceList] = useState<ProvinceType[]>([]);
  const [cityList, setCityList] = useState<CityType[]>([]);
  const [barangayList, setBarangayList] = useState<BarangayType[]>([]);

  const [regionSelected, setRegionSelected] = useState<RegionType | null>(null);
  const [provinceSelected, setProvinceSelected] = useState<ProvinceType | null>(null);
  const [citySelected, setCitySelected] = useState<CityType | null>(null);
  const [barangaySelected, setBarangaySelected] = useState<BarangayType | null>(null);
  const [street, setStreet] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');

  // Fetch Regions
  useEffect(() => {
    setRegionList(regions);
  }, []);

  // Fetch Provinces by region_code
  useEffect(() => {
    if (regionSelected) {
      const selectedProvince = provinces.filter((province) => regionSelected.region_code === province.region_code);
      setProvinceList(selectedProvince);
    }
  }, [regionSelected]);

  // Fetch Cities by province_code
  useEffect(() => {
    if (provinceSelected) {
      const selectedCity = cities.filter((city) => provinceSelected.province_code === city.province_code);
      setCityList(selectedCity);
    }
  }, [provinceSelected]);

  // Fetch Barangays by city_code
  useEffect(() => {
    if (citySelected) {
      const selectedBrgy = (barangays as BarangayType[]).filter((brgy) => citySelected.city_code === brgy.city_code);
      setBarangayList(selectedBrgy);
    }
  }, [citySelected]);

  const getRegionByCode = (region_code: string) => {
    const region = regionList.find((region) => region.region_code === region_code);
    return region;
  };

  const getProvinceByCode = (province_code: string) => {
    const province = provinceList.find((province) => province.province_code === province_code);
    return province;
  };

  const getCityByCode = (city_code: string) => {
    const city = cityList.find((city) => city.city_code === city_code);
    return city;
  };

  const getBarangayByCode = (brgy_code: string) => {
    const brgy = barangayList.find((brgy) => brgy.brgy_code === brgy_code);
    return brgy;
  };

  return {
    regionList,
    provinceList,
    cityList,
    barangayList,
    regionSelected,
    provinceSelected,
    citySelected,
    barangaySelected,
    street,
    postalCode,
    setRegionSelected,
    setProvinceSelected,
    setCitySelected,
    setBarangaySelected,
    setStreet,
    setPostalCode,
    toString: () =>
      `${street}, ${barangaySelected.brgy_name}, ${citySelected.city_name}, ${provinceSelected.province_name}, ${regionSelected.region_name}`,
    toAPI: () =>
      JSON.stringify({
        address: `${street}, ${barangaySelected.brgy_name}, ${citySelected.city_name}, ${provinceSelected.province_name}, ${regionSelected.region_name}`,
        details: {
          region_code: regionSelected.region_code,
          province_code: provinceSelected.province_code,
          city_code: citySelected.city_code,
          brgy_code: barangaySelected.brgy_code,
          street,
          postalCode,
        },
      }),
    getRegionByCode,
    getProvinceByCode,
    getCityByCode,
    getBarangayByCode,
  };
}
