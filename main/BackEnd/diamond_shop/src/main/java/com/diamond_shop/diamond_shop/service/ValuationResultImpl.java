package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.entity.ValuationResultEntity;
import com.diamond_shop.diamond_shop.pojo.DiamondPojo;
import com.diamond_shop.diamond_shop.repository.ProcessRequestRepository;
import com.diamond_shop.diamond_shop.repository.ProcessResultRepository;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;
import com.diamond_shop.diamond_shop.repository.ValuationResultRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ValuationResultImpl implements ValuationResultService {
    @Autowired
    ValuationResultRepository valuationResultRepository;
    @Autowired
    ValuationRequestRepository valuationRequestRepository;
    @Autowired
    private ProcessResultRepository processResultRepository;
    @Autowired
    private ProcessRequestRepository processRequestRepository;

    //
//    @Override
//    public String valuateDiamond(ValuationResultDTO valuationResultDTO) {
//        ValuationResultEntity valuationResult = valuationResultRepository.findById(valuationResultDTO.getId());
//        valuationResult.setOrigin(valuationResultDTO.getOrigin());
//        valuationResult.setShape(valuationResultDTO.getShape());
//        valuationResult.setCarat(valuationResultDTO.getCarat_weight());
//        valuationResult.setColor(valuationResultDTO.getColor());
//        valuationResult.setCut(valuationResultDTO.getCut());
//        valuationResult.setClarity(valuationResultDTO.getClarity());
//        valuationResult.setMeasurements(valuationResultDTO.getMeasurements());
//        valuationResult.setPolish(valuationResultDTO.getPolish());
//        valuationResult.setSymmetry(valuationResultDTO.getSymmetry());
//        valuationResult.setFluorescence(valuationResultDTO.getFluorescence());
//        valuationResult.setProportions(valuationResultDTO.getProportions());
//        valuationResult.setPrice(valuationResultDTO.getPrice());
//        valuationResultRepository.save(valuationResult);
//
//        ProcessResultEntity processResult = processResultRepository.findByValuationResultId(valuationResultDTO.getId());
//        processResult.setName("Valuated");
//        processResultRepository.save(processResult);
//
//        ProcessRequestEntity processRequest = processRequestRepository.findById(processResult.getProcessRequestId().getId());
//        processRequest.setName("Valuated");
//        processRequestRepository.save(processRequest);
//
//        valuatedDiamondService.createValuatedDiamond(valuationResultDTO.getId());
//
//        return "Valuate successful!";
//    }
//
    @Override
    public String createValuationResult(ProcessRequestEntity processRequest) {
        Optional<ValuationRequestEntity> valuationRequest = valuationRequestRepository.findById(processRequest.getPendingRequestId().getValuationRequestEntity().getId());
        if (valuationRequest.isEmpty()) return "Could not find valuation request";
        Date createdDate = new Date();
        long randomId = (long) (Math.random() * Math.pow(10, 10));
        ValuationResultEntity valuationResultEntity = new ValuationResultEntity(Long.toString(randomId), valuationRequest.get(), createdDate, "", "", new BigDecimal(0), "", "", "", "", "", "", "", new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0));
        valuationResultRepository.save(valuationResultEntity);
        return "Assigned successfully!";
    }

    @Override
    public List<DiamondPojo> crawlLabGrownDiamond(String shape) {
        List<DiamondPojo> diamonds = new ArrayList<>();
        if (shape.isEmpty()) {
            try {
                Document doc = Jsoup.connect("https://www.stonealgo.com/lab-grown-diamond-prices/").get();
                Elements elements = doc.select(".bg-white.overflow-hidden.border");

                for (Element element : elements) {
                    String name = element.select("a").text();
                    String price = element.select(".text-xl").text();
                    String priceChange = element.select(".text-xs .text-red-500").text();

                    if (priceChange.isEmpty()) {
                        priceChange = element.select(".text-xs .text-green-400").text();
                    }
                    String weight = element.select("dd").get(0).text();
                    String inventory = element.select("dd").get(1).text();
                    String inventoryChangeUp = "";
                    String inventoryChangeDown = "";
                    String imageUrl = element.select("img").attr("src");

                    // Extract inventory changes based on SVG elements
                    Elements inventoryChangeElements = element.select("dd.chart-gray-100 .flex.items-baseline");
                    for (Element changeElement : inventoryChangeElements) {
                        String svgPath = changeElement.select("svg path").attr("d");
                        String changeValue = changeElement.select("span").text();

                        // Check if the SVG path corresponds to an upward or downward arrow
                        if (svgPath.equals("M5 10l7-7m0 0l7 7m-7-7v18")) {
                            inventoryChangeUp = changeValue;
                        } else if (svgPath.equals("M19 14l-7 7m0 0l-7-7m7 7V3")) {
                            inventoryChangeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(name, price, priceChange, weight, inventory, inventoryChangeUp, inventoryChangeDown, imageUrl);
                    diamonds.add(diamond);
                }

                Elements rows = doc.select("tr[data-table_link=true]");
                for (Element row : rows) {
                    String priceIndex = row.select("td a span").text();
                    String chart = row.select("td img").attr("data-src");

                    Elements tds = row.select("td");
                    String priceUsd = tds.get(2).text();
                    String range = tds.get(4).text();
                    String inv = tds.get(5).text();

                    String changeUp = "";
                    String changeDown = "";

                    for (Element td : tds) {
                        String changeValue = td.text();
                        String changeClass = td.className();

                        if (changeClass.contains("text-green-400")) {
                            changeUp = changeValue;
                        } else if (changeClass.contains("text-red-500")) {
                            changeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(priceIndex, chart, priceUsd, changeUp, changeDown, range, inv);
                    diamonds.add(diamond);
                }

                String contentChange = doc.select("div.flex.flex-wrap.items-center.justify-start.text-lg.leading-6.font-bold.text-gray-900.mt-2 p").text();
                if (!contentChange.isEmpty()) {
                    DiamondPojo diamond = new DiamondPojo(contentChange);
                    diamonds.add(diamond);
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            try {
                String url = "https://www.stonealgo.com/lab-grown-diamond-prices/?i=" + shape;
                Document doc = Jsoup.connect(url).get();
                Elements elements = doc.select(".bg-white.overflow-hidden.border");

                for (Element element : elements) {
                    String name = element.select("a").text();
                    String price = element.select(".text-xl").text();
                    String priceChange = element.select(".text-xs .text-red-500").text();

                    if (priceChange.isEmpty()) {
                        priceChange = element.select(".text-xs .text-green-400").text();
                    }
                    String weight = element.select("dd").get(0).text();
                    String inventory = element.select("dd").get(1).text();
                    String inventoryChangeUp = "";
                    String inventoryChangeDown = "";
                    String imageUrl = element.select("img").attr("src");

                    Elements inventoryChangeElements = element.select("dd.chart-gray-100 .flex.items-baseline");
                    for (Element changeElement : inventoryChangeElements) {
                        String svgPath = changeElement.select("svg path").attr("d");
                        String changeValue = changeElement.select("span").text();

                        if (svgPath.equals("M5 10l7-7m0 0l7 7m-7-7v18")) {
                            inventoryChangeUp = changeValue;
                        } else if (svgPath.equals("M19 14l-7 7m0 0l-7-7m7 7V3")) {
                            inventoryChangeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(name, price, priceChange, weight, inventory, inventoryChangeUp, inventoryChangeDown, imageUrl);
                    diamonds.add(diamond);
                }

                Elements rows = doc.select("tr[data-table_link=true]");
                for (Element row : rows) {
                    String priceIndex = row.select("td a span").text();
                    String chart = row.select("td img").attr("data-src");

                    Elements tds = row.select("td");
                    String priceUsd = tds.get(2).text();
                    String range = tds.get(4).text();
                    String inv = tds.get(5).text();

                    String changeUp = "";
                    String changeDown = "";

                    for (Element td : tds) {
                        String changeValue = td.text();
                        String changeClass = td.className();

                        if (changeClass.contains("text-green-400")) {
                            changeUp = changeValue;
                        } else if (changeClass.contains("text-red-500")) {
                            changeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(priceIndex, chart, priceUsd, changeUp, changeDown, range, inv);
                    diamonds.add(diamond);
                }
                String contentChange = doc.select("div.flex.flex-wrap.items-center.justify-start.text-lg.leading-6.font-bold.text-gray-900.mt-2 p").text();
                if (!contentChange.isEmpty()) {
                    DiamondPojo diamond = new DiamondPojo(contentChange);
                    diamonds.add(diamond);
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return diamonds;
    }

    @Override
    public List<DiamondPojo> crawlNaturalDiamond(String shape) {
        List<DiamondPojo> diamonds = new ArrayList<>();
        if (shape.isEmpty()) {
            try {
                Document doc = Jsoup.connect("https://www.stonealgo.com/diamond-prices/").get();
                Elements elements = doc.select(".bg-white.overflow-hidden.border");

                for (Element element : elements) {
                    String name = element.select("a").text();
                    String price = element.select(".text-xl").text();
                    String priceChange = element.select(".text-xs .text-red-500").text();

                    if (priceChange.isEmpty()) {
                        priceChange = element.select(".text-xs .text-green-400").text();
                    }
                    String weight = element.select("dd").get(0).text();
                    String inventory = element.select("dd").get(1).text();
                    String inventoryChangeUp = "";
                    String inventoryChangeDown = "";
                    String imageUrl = element.select("img").attr("src");

                    Elements inventoryChangeElements = element.select("dd.chart-gray-100 .flex.items-baseline");
                    for (Element changeElement : inventoryChangeElements) {
                        String svgPath = changeElement.select("svg path").attr("d");
                        String changeValue = changeElement.select("span").text();

                        if (svgPath.equals("M5 10l7-7m0 0l7 7m-7-7v18")) {
                            inventoryChangeUp = changeValue;
                        } else if (svgPath.equals("M19 14l-7 7m0 0l-7-7m7 7V3")) {
                            inventoryChangeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(name, price, priceChange, weight, inventory, inventoryChangeUp, inventoryChangeDown, imageUrl);
                    diamonds.add(diamond);
                }

                Elements rows = doc.select("tr[data-table_link=true]");
                for (Element row : rows) {
                    String priceIndex = row.select("td a span").text();
                    String chart = row.select("td img").attr("data-src");

                    Elements tds = row.select("td");
                    String priceUsd = tds.get(2).text();
                    String range = tds.get(4).text();
                    String inv = tds.get(5).text();

                    String changeUp = "";
                    String changeDown = "";

                    for (Element td : tds) {
                        String changeValue = td.text();
                        String changeClass = td.className();

                        if (changeClass.contains("text-green-400")) {
                            changeUp = changeValue;
                        } else if (changeClass.contains("text-red-500")) {
                            changeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(priceIndex, chart, priceUsd, changeUp, changeDown, range, inv);
                    diamonds.add(diamond);
                }

                String contentChange = doc.select("div.flex.flex-wrap.items-center.justify-start.text-lg.leading-6.font-bold.text-gray-900.mt-2 p").text();
                if (!contentChange.isEmpty()) {
                    DiamondPojo diamond = new DiamondPojo(contentChange);
                    diamonds.add(diamond);
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            try {
                String url = "https://www.stonealgo.com/diamond-prices/?i=" + shape;
                Document doc = Jsoup.connect(url).get();
                Elements elements = doc.select(".bg-white.overflow-hidden.border");

                for (Element element : elements) {
                    String name = element.select("a").text();
                    String price = element.select(".text-xl").text();
                    String priceChange = element.select(".text-xs .text-red-500").text();

                    if (priceChange.isEmpty()) {
                        priceChange = element.select(".text-xs .text-green-400").text();
                    }
                    String weight = element.select("dd").get(0).text();
                    String inventory = element.select("dd").get(1).text();
                    String inventoryChangeUp = "";
                    String inventoryChangeDown = "";
                    String imageUrl = element.select("img").attr("src");

                    Elements inventoryChangeElements = element.select("dd.chart-gray-100 .flex.items-baseline");
                    for (Element changeElement : inventoryChangeElements) {
                        String svgPath = changeElement.select("svg path").attr("d");
                        String changeValue = changeElement.select("span").text();

                        if (svgPath.equals("M5 10l7-7m0 0l7 7m-7-7v18")) {
                            inventoryChangeUp = changeValue;
                        } else if (svgPath.equals("M19 14l-7 7m0 0l-7-7m7 7V3")) {
                            inventoryChangeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(name, price, priceChange, weight, inventory, inventoryChangeUp, inventoryChangeDown, imageUrl);
                    diamonds.add(diamond);
                }

                Elements rows = doc.select("tr[data-table_link=true]");
                for (Element row : rows) {
                    String priceIndex = row.select("td a span").text();
                    String chart = row.select("td img").attr("data-src");

                    Elements tds = row.select("td");
                    String priceUsd = tds.get(2).text();
                    String range = tds.get(4).text();
                    String inv = tds.get(5).text();

                    String changeUp = "";
                    String changeDown = "";

                    for (Element td : tds) {
                        String changeValue = td.text();
                        String changeClass = td.className();

                        if (changeClass.contains("text-green-400")) {
                            changeUp = changeValue;
                        } else if (changeClass.contains("text-red-500")) {
                            changeDown = changeValue;
                        }
                    }

                    DiamondPojo diamond = new DiamondPojo(priceIndex, chart, priceUsd, changeUp, changeDown, range, inv);
                    diamonds.add(diamond);
                }
                String contentChange = doc.select("div.flex.flex-wrap.items-center.justify-start.text-lg.leading-6.font-bold.text-gray-900.mt-2 p").text();
                if (!contentChange.isEmpty()) {
                    DiamondPojo diamond = new DiamondPojo(contentChange);
                    diamonds.add(diamond);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return diamonds;
    }
}