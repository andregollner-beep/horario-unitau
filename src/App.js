import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { utils, writeFile } from "xlsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { BookOpen, User, Home, FileText, Clock, GraduationCap } from "lucide-react";

/* Restante do código fornecido no documento aberto */
